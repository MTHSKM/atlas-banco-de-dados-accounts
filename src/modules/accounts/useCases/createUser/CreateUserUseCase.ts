import { ICreateUsersDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs"



@injectable()
class CreateUserUseCase{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ){}

    async execute({name, email, password}: ICreateUsersDTO): Promise<void> {
        const userAlreadyExists = await this.userRepository.findByEmail(email)

        if(userAlreadyExists){
            throw new AppError("User already exists!")
        }

        const passwordHash = await hash(password, 8)

        await this.userRepository.create({
            name,
            email,
            password: passwordHash
        })
    }
}

export { CreateUserUseCase }
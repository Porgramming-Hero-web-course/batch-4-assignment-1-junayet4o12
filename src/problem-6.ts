{
    interface Profile {
        name: string;
        age: number;
        email: string;
    } // Type for the profile
    const updateProfile = (profile: Profile, 
        updatedValue: Partial<Profile> // Partial type is used to make all the properties of the type optional
    ): Profile => {
        return {
            ...profile,
            ...updatedValue
        } // Updating the profile
    }

    const profile: Profile = { name: 'John', age: 20, email: 'jhon@gmail.com' };
    const updatedProfile = updateProfile(profile, { age: 35 });  // Updating the age of the profile
    const updatedProfile2 = updateProfile(profile, { email: 'rahid@gmail.com'}); // Updating the email of the profile
    console.log('Updated Profile', updatedProfile);
    console.log('Updated Profile 2', updatedProfile2);
    
}
const { personas } = require(".");

module.exports = mongoose => {
    const Tutorial = mongoose.model(
      "Persona",
      mongoose.Schema(
        {
          cedula: String,
          apellidos: String,
          edad: Number,
          casado: Boolean
        },
        { timestamps: true }
      ),
      "Persona"
    );

    return Persona;
  };
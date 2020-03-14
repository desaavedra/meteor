import "./main.html";
import Profiles from "../collections";

Template.profile.created = () => {
  console.log("Created the profile template");
};

Template.profile.rendered = () => {
  console.log("Rendered the profile template");
};

Template.profile.helpers({
  profilesCollection: () => {
    Profiles.find().array.forEach(element => {
      console.log(element)
    });;
    return Profiles.find();
  },
  randomHelper: () => {
    return Session.get("randomNumber");
  }
});

Template.profile.events({
  'submit': (event) => {
    console.log("hola")
    event.preventDefault();
    const target = event.target;
    const object = {
      name: target.nombre.value,
      responsible: target.descripcion.value,
      description: target.responsable.value,
      start_date: target.fechaInicio.value,
      end_date: target.fechaFinal.value,
      end_date1: target.ubicacion.value
    }
    Profiles.insert(object);
  }
});

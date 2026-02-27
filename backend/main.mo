import List "mo:core/List";
import MixinStorage "blob-storage/Mixin";

actor {
  include MixinStorage();

  type Form = {
    name : Text;
    phone : Text;
    travelMonth : Text;
    numberOfAdults : Nat;
    packageInterest : Text;
    timestamp : Int;
  };

  let forms = List.empty<Form>();

  public shared ({ caller }) func submitForm(form : Form) : async () {
    forms.add(form);
  };

  public query ({ caller }) func getForms() : async [Form] {
    forms.toArray();
  };
};

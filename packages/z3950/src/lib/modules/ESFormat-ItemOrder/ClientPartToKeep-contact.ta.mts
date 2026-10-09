/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
// export { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";


/**
 * @summary ClientPartToKeep_contact
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientPartToKeep-contact ::= SEQUENCE {
 *     name [1] IMPLICIT InternationalString OPTIONAL,
 *     phone [2] IMPLICIT InternationalString OPTIONAL,
 *     email [3] IMPLICIT InternationalString OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ClientPartToKeep_contact {
    /**
     * @summary `name`.
     * @public
     * @readonly
     */
    readonly name: OPTIONAL<InternationalString>;
    /**
     * @summary `phone`.
     * @public
     * @readonly
     */
    readonly phone: OPTIONAL<InternationalString>;
    /**
     * @summary `email`.
     * @public
     * @readonly
     */
    readonly email: OPTIONAL<InternationalString>;

    constructor (
        name: OPTIONAL<InternationalString>,
        phone: OPTIONAL<InternationalString>,
        email: OPTIONAL<InternationalString>
    ) {
        this.name = name;
        this.phone = phone;
        this.email = email;
    }

    /**
     * @summary Restructures an object into a ClientPartToKeep_contact
     * @description
     * 
     * This takes an `object` and converts it to a `ClientPartToKeep_contact`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ClientPartToKeep_contact`.
     * @returns {ClientPartToKeep_contact}
     */
    public static _from_object (_o: { [_K in keyof (ClientPartToKeep_contact)]: (ClientPartToKeep_contact)[_K] }): ClientPartToKeep_contact {
        return new ClientPartToKeep_contact(_o.name, _o.phone, _o.email);
    }


}

/**
 * @summary The Leading Root Component Types of ClientPartToKeep_contact
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ClientPartToKeep_contact: $.ComponentSpec[] = [
    new $.ComponentSpec("name", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("phone", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("email", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ClientPartToKeep_contact
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ClientPartToKeep_contact: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ClientPartToKeep_contact
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ClientPartToKeep_contact: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ClientPartToKeep_contact: $.ASN1Decoder<ClientPartToKeep_contact> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClientPartToKeep_contact
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClientPartToKeep_contact (el: _Element): ClientPartToKeep_contact {
    if (!_cached_decoder_for_ClientPartToKeep_contact) { _cached_decoder_for_ClientPartToKeep_contact = function (el: _Element): ClientPartToKeep_contact {
    let name: OPTIONAL<InternationalString>;
    let phone: OPTIONAL<InternationalString>;
    let email: OPTIONAL<InternationalString>;
    const callbacks: $.DecodingMap = {
        "name": (_el: _Element): void => { name = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "phone": (_el: _Element): void => { phone = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "email": (_el: _Element): void => { email = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ClientPartToKeep_contact,
        _extension_additions_list_spec_for_ClientPartToKeep_contact,
        _root_component_type_list_2_spec_for_ClientPartToKeep_contact,
        undefined,
    );
    return new ClientPartToKeep_contact(
        name,
        phone,
        email
    );
}; }
    return _cached_decoder_for_ClientPartToKeep_contact(el);
}

let _cached_encoder_for_ClientPartToKeep_contact: $.ASN1Encoder<ClientPartToKeep_contact> | null = null;

/**
 * @summary Encodes a(n) ClientPartToKeep_contact into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClientPartToKeep_contact, encoded as an ASN.1 Element.
 */
export
function _encode_ClientPartToKeep_contact (value: ClientPartToKeep_contact, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClientPartToKeep_contact) { _cached_encoder_for_ClientPartToKeep_contact = function (value: ClientPartToKeep_contact, elGetter: $.ASN1Encoder<ClientPartToKeep_contact>): _Element {
    const _components: _Element[] = new Array(3);
    let _components_i = 0;
    if (value.name !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.name, $.BER);
    }
    if (value.phone !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.phone, $.BER);
    }
    if (value.email !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_InternationalString, $.BER)(value.email, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ClientPartToKeep_contact(value, elGetter);
}


/* eslint-enable */

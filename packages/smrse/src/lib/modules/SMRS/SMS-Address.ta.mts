/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SMS_Address_address_type, SMS_Address_address_type_unknown_type /* IMPORTED_LONG_NAMED_INTEGER */, unknown_type /* IMPORTED_SHORT_NAMED_INTEGER */, SMS_Address_address_type_internat_number /* IMPORTED_LONG_NAMED_INTEGER */, internat_number /* IMPORTED_SHORT_NAMED_INTEGER */, SMS_Address_address_type_national_number /* IMPORTED_LONG_NAMED_INTEGER */, national_number /* IMPORTED_SHORT_NAMED_INTEGER */, SMS_Address_address_type_net_spec_number /* IMPORTED_LONG_NAMED_INTEGER */, net_spec_number /* IMPORTED_SHORT_NAMED_INTEGER */, SMS_Address_address_type_short_number /* IMPORTED_LONG_NAMED_INTEGER */, short_number /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_SMS_Address_address_type, _encode_SMS_Address_address_type } from "../SMRS/SMS-Address-address-type.ta.mjs";
// export { SMS_Address_address_type, SMS_Address_address_type_unknown_type /* IMPORTED_LONG_NAMED_INTEGER */, unknown_type /* IMPORTED_SHORT_NAMED_INTEGER */, SMS_Address_address_type_internat_number /* IMPORTED_LONG_NAMED_INTEGER */, internat_number /* IMPORTED_SHORT_NAMED_INTEGER */, SMS_Address_address_type_national_number /* IMPORTED_LONG_NAMED_INTEGER */, national_number /* IMPORTED_SHORT_NAMED_INTEGER */, SMS_Address_address_type_net_spec_number /* IMPORTED_LONG_NAMED_INTEGER */, net_spec_number /* IMPORTED_SHORT_NAMED_INTEGER */, SMS_Address_address_type_short_number /* IMPORTED_LONG_NAMED_INTEGER */, short_number /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_SMS_Address_address_type, _encode_SMS_Address_address_type } from "../SMRS/SMS-Address-address-type.ta.mjs";
import { SMS_Address_numbering_plan, SMS_Address_numbering_plan_unknown_numbering /* IMPORTED_LONG_NAMED_INTEGER */, unknown_numbering /* IMPORTED_SHORT_NAMED_INTEGER */, SMS_Address_numbering_plan_iSDN_numbering /* IMPORTED_LONG_NAMED_INTEGER */, iSDN_numbering /* IMPORTED_SHORT_NAMED_INTEGER */, SMS_Address_numbering_plan_data_network_numbering /* IMPORTED_LONG_NAMED_INTEGER */, data_network_numbering /* IMPORTED_SHORT_NAMED_INTEGER */, SMS_Address_numbering_plan_telex_numbering /* IMPORTED_LONG_NAMED_INTEGER */, telex_numbering /* IMPORTED_SHORT_NAMED_INTEGER */, SMS_Address_numbering_plan_national_numbering /* IMPORTED_LONG_NAMED_INTEGER */, national_numbering /* IMPORTED_SHORT_NAMED_INTEGER */, SMS_Address_numbering_plan_private_numbering /* IMPORTED_LONG_NAMED_INTEGER */, private_numbering /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_SMS_Address_numbering_plan, _encode_SMS_Address_numbering_plan } from "../SMRS/SMS-Address-numbering-plan.ta.mjs";
// export { SMS_Address_numbering_plan, SMS_Address_numbering_plan_unknown_numbering /* IMPORTED_LONG_NAMED_INTEGER */, unknown_numbering /* IMPORTED_SHORT_NAMED_INTEGER */, SMS_Address_numbering_plan_iSDN_numbering /* IMPORTED_LONG_NAMED_INTEGER */, iSDN_numbering /* IMPORTED_SHORT_NAMED_INTEGER */, SMS_Address_numbering_plan_data_network_numbering /* IMPORTED_LONG_NAMED_INTEGER */, data_network_numbering /* IMPORTED_SHORT_NAMED_INTEGER */, SMS_Address_numbering_plan_telex_numbering /* IMPORTED_LONG_NAMED_INTEGER */, telex_numbering /* IMPORTED_SHORT_NAMED_INTEGER */, SMS_Address_numbering_plan_national_numbering /* IMPORTED_LONG_NAMED_INTEGER */, national_numbering /* IMPORTED_SHORT_NAMED_INTEGER */, SMS_Address_numbering_plan_private_numbering /* IMPORTED_LONG_NAMED_INTEGER */, private_numbering /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_SMS_Address_numbering_plan, _encode_SMS_Address_numbering_plan } from "../SMRS/SMS-Address-numbering-plan.ta.mjs";
import { SMS_Address_address_value, _decode_SMS_Address_address_value, _encode_SMS_Address_address_value } from "../SMRS/SMS-Address-address-value.ta.mjs";
// export { SMS_Address_address_value, _decode_SMS_Address_address_value, _encode_SMS_Address_address_value } from "../SMRS/SMS-Address-address-value.ta.mjs";


/**
 * @summary SMS_Address
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMS-Address ::= SEQUENCE {
 *     address-type INTEGER {
 *         unknown-type (0),
 *         internat-number (1),
 *         national-number (2),
 *         net-spec-number (3),
 *         short-number (4)
 *     },
 * 
 *     numbering-plan INTEGER {
 *         unknown-numbering (0),
 *         iSDN-numbering (1),
 *         data-network-numbering (3),
 *         telex-numbering (4),
 *         national-numbering (8),
 *         private-numbering (9)
 *     },
 * 
 *     address-value CHOICE {
 *         octet-format SemiOctetString
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class SMS_Address {
    constructor (
        /**
         * @summary `address_type`.
         * @public
         * @readonly
         */
        readonly address_type: SMS_Address_address_type,
        /**
         * @summary `numbering_plan`.
         * @public
         * @readonly
         */
        readonly numbering_plan: SMS_Address_numbering_plan,
        /**
         * @summary `address_value`.
         * @public
         * @readonly
         */
        readonly address_value: SMS_Address_address_value
    ) {}

    /**
     * @summary Restructures an object into a SMS_Address
     * @description
     * 
     * This takes an `object` and converts it to a `SMS_Address`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMS_Address`.
     * @returns {SMS_Address}
     */
    public static _from_object (_o: { [_K in keyof (SMS_Address)]: (SMS_Address)[_K] }): SMS_Address {
        return new SMS_Address(_o.address_type, _o.numbering_plan, _o.address_value);
    }


}

/**
 * @summary The Leading Root Component Types of SMS_Address
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMS_Address: $.ComponentSpec[] = [
    new $.ComponentSpec("address-type", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("numbering-plan", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("address-value", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of SMS_Address
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMS_Address: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMS_Address
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMS_Address: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMS_Address: $.ASN1Decoder<SMS_Address> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMS_Address
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMS_Address (el: _Element): SMS_Address {
    if (!_cached_decoder_for_SMS_Address) { _cached_decoder_for_SMS_Address = function (el: _Element): SMS_Address {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("SMS-Address contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "address-type";
    sequence[1].name = "numbering-plan";
    sequence[2].name = "address-value";
    let address_type!: SMS_Address_address_type;
    let numbering_plan!: SMS_Address_numbering_plan;
    let address_value!: SMS_Address_address_value;
    address_type = _decode_SMS_Address_address_type(sequence[0]);
    numbering_plan = _decode_SMS_Address_numbering_plan(sequence[1]);
    address_value = _decode_SMS_Address_address_value(sequence[2]);
    return new SMS_Address(
        address_type,
        numbering_plan,
        address_value,

    );
}; }
    return _cached_decoder_for_SMS_Address(el);
}

let _cached_encoder_for_SMS_Address: $.ASN1Encoder<SMS_Address> | null = null;

/**
 * @summary Encodes a(n) SMS_Address into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMS_Address, encoded as an ASN.1 Element.
 */
export
function _encode_SMS_Address (value: SMS_Address, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMS_Address) { _cached_encoder_for_SMS_Address = function (value: SMS_Address, elGetter: $.ASN1Encoder<SMS_Address>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SMS_Address_address_type(value.address_type, $.BER),
            /* REQUIRED   */ _encode_SMS_Address_numbering_plan(value.numbering_plan, $.BER),
            /* REQUIRED   */ _encode_SMS_Address_address_value(value.address_value, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SMS_Address(value, elGetter);
}


/* eslint-enable */

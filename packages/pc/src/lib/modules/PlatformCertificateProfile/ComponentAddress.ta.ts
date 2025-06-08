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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { AddressType, _decode_AddressType, _encode_AddressType } from "../PlatformCertificateProfile/AddressType.ta";
export { AddressType, _decode_AddressType, _encode_AddressType } from "../PlatformCertificateProfile/AddressType.ta";


/* START_OF_SYMBOL_DEFINITION ComponentAddress */
/**
 * @summary ComponentAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ComponentAddress ::= SEQUENCE {
 *     addressType     AddressType,
 *     addressValue    UTF8String (SIZE (1..strmax)) }
 * ```
 * 
 * @class
 */
export
class ComponentAddress {
    constructor (
        /**
         * @summary `addressType`.
         * @public
         * @readonly
         */
        readonly addressType: AddressType,
        /**
         * @summary `addressValue`.
         * @public
         * @readonly
         */
        readonly addressValue: UTF8String
    ) {}

    /**
     * @summary Restructures an object into a ComponentAddress
     * @description
     * 
     * This takes an `object` and converts it to a `ComponentAddress`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ComponentAddress`.
     * @returns {ComponentAddress}
     */
    public static _from_object (_o: { [_K in keyof (ComponentAddress)]: (ComponentAddress)[_K] }): ComponentAddress {
        return new ComponentAddress(_o.addressType, _o.addressValue);
    }


}
/* END_OF_SYMBOL_DEFINITION ComponentAddress */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ComponentAddress */
/**
 * @summary The Leading Root Component Types of ComponentAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ComponentAddress: $.ComponentSpec[] = [
    new $.ComponentSpec("addressType", false, $.hasTag(_TagClass.universal, 6), undefined, undefined),
    new $.ComponentSpec("addressValue", false, $.hasTag(_TagClass.universal, 12), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ComponentAddress */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ComponentAddress */
/**
 * @summary The Trailing Root Component Types of ComponentAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ComponentAddress: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ComponentAddress */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ComponentAddress */
/**
 * @summary The Extension Addition Component Types of ComponentAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ComponentAddress: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ComponentAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ComponentAddress */
let _cached_decoder_for_ComponentAddress: $.ASN1Decoder<ComponentAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ComponentAddress */

/* START_OF_SYMBOL_DEFINITION _decode_ComponentAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) ComponentAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ComponentAddress} The decoded data structure.
 */
export
function _decode_ComponentAddress (el: _Element) {
    if (!_cached_decoder_for_ComponentAddress) { _cached_decoder_for_ComponentAddress = function (el: _Element): ComponentAddress {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ComponentAddress contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "addressType";
    sequence[1].name = "addressValue";
    let addressType!: AddressType;
    let addressValue!: UTF8String;
    addressType = _decode_AddressType(sequence[0]);
    addressValue = $._decodeUTF8String(sequence[1]);
    return new ComponentAddress(
        addressType,
        addressValue,

    );
}; }
    return _cached_decoder_for_ComponentAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ComponentAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ComponentAddress */
let _cached_encoder_for_ComponentAddress: $.ASN1Encoder<ComponentAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ComponentAddress */

/* START_OF_SYMBOL_DEFINITION _encode_ComponentAddress */
/**
 * @summary Encodes a(n) ComponentAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ComponentAddress, encoded as an ASN.1 Element.
 */
export
function _encode_ComponentAddress (value: ComponentAddress, elGetter: $.ASN1Encoder<ComponentAddress>) {
    if (!_cached_encoder_for_ComponentAddress) { _cached_encoder_for_ComponentAddress = function (value: ComponentAddress, elGetter: $.ASN1Encoder<ComponentAddress>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AddressType(value.addressType, $.BER),
            /* REQUIRED   */ $._encodeUTF8String(value.addressValue, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ComponentAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ComponentAddress */

/* eslint-enable */

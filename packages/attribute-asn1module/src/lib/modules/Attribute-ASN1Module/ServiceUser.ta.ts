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
import { DMI_SERVICEUSER } from "../Attribute-ASN1Module/DMI-SERVICEUSER.oca";
export { DMI_SERVICEUSER } from "../Attribute-ASN1Module/DMI-SERVICEUSER.oca";
import { ServiceUserSet } from "../Attribute-ASN1Module/ServiceUserSet.osa";
export { ServiceUserSet } from "../Attribute-ASN1Module/ServiceUserSet.osa";


/* START_OF_SYMBOL_DEFINITION ServiceUser */
/**
 * @summary ServiceUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceUser ::= SEQUENCE {
 *   identifier  DMI-SERVICEUSER.&id({ServiceUserSet}),
 *   details     DMI-SERVICEUSER.&Value({ServiceUserSet}{@.identifier})
 * }
 * ```
 * 
 * @class
 */
export
class ServiceUser {
    constructor (
        /**
         * @summary `identifier`.
         * @public
         * @readonly
         */
        readonly identifier: OBJECT_IDENTIFIER,
        /**
         * @summary `details`.
         * @public
         * @readonly
         */
        readonly details: _Element
    ) {}

    /**
     * @summary Restructures an object into a ServiceUser
     * @description
     * 
     * This takes an `object` and converts it to a `ServiceUser`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceUser`.
     * @returns {ServiceUser}
     */
    public static _from_object (_o: { [_K in keyof (ServiceUser)]: (ServiceUser)[_K] }): ServiceUser {
        return new ServiceUser(_o.identifier, _o.details);
    }


}
/* END_OF_SYMBOL_DEFINITION ServiceUser */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ServiceUser */
/**
 * @summary The Leading Root Component Types of ServiceUser
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServiceUser: $.ComponentSpec[] = [
    new $.ComponentSpec("identifier", false, $.hasTag(_TagClass.universal, 6), undefined, undefined),
    new $.ComponentSpec("details", false, $.hasAnyTag, undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ServiceUser */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ServiceUser */
/**
 * @summary The Trailing Root Component Types of ServiceUser
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServiceUser: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ServiceUser */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ServiceUser */
/**
 * @summary The Extension Addition Component Types of ServiceUser
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServiceUser: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ServiceUser */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceUser */
let _cached_decoder_for_ServiceUser: $.ASN1Decoder<ServiceUser> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceUser */

/* START_OF_SYMBOL_DEFINITION _decode_ServiceUser */
/**
 * @summary Decodes an ASN.1 element into a(n) ServiceUser
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ServiceUser} The decoded data structure.
 */
export
function _decode_ServiceUser (el: _Element) {
    if (!_cached_decoder_for_ServiceUser) { _cached_decoder_for_ServiceUser = function (el: _Element): ServiceUser {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ServiceUser contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "identifier";
    sequence[1].name = "details";
    let identifier!: OBJECT_IDENTIFIER;
    let details!: _Element;
    identifier = $._decodeObjectIdentifier(sequence[0]);
    details = $._decodeAny(sequence[1]);
    return new ServiceUser(
        identifier,
        details,

    );
}; }
    return _cached_decoder_for_ServiceUser(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ServiceUser */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceUser */
let _cached_encoder_for_ServiceUser: $.ASN1Encoder<ServiceUser> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceUser */

/* START_OF_SYMBOL_DEFINITION _encode_ServiceUser */
/**
 * @summary Encodes a(n) ServiceUser into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceUser, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceUser (value: ServiceUser, elGetter: $.ASN1Encoder<ServiceUser>) {
    if (!_cached_encoder_for_ServiceUser) { _cached_encoder_for_ServiceUser = function (value: ServiceUser, elGetter: $.ASN1Encoder<ServiceUser>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.identifier, $.BER),
            /* REQUIRED   */ $._encodeAny(value.details, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ServiceUser(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ServiceUser */

/* eslint-enable */

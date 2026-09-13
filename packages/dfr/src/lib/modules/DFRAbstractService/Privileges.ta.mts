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
import { PrivilegeAttributeCertificate, _decode_PrivilegeAttributeCertificate, _encode_PrivilegeAttributeCertificate } from "../DFRAbstractService/PrivilegeAttributeCertificate.ta.mjs";
// export { PrivilegeAttributeCertificate, _decode_PrivilegeAttributeCertificate, _encode_PrivilegeAttributeCertificate } from "../DFRAbstractService/PrivilegeAttributeCertificate.ta.mjs";


/**
 * @summary Privileges
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Privileges ::= SEQUENCE {
 *     operation-pac   [0] PrivilegeAttributeCertificate OPTIONAL,
 *     proxy-pac       [1] PrivilegeAttributeCertificate OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Privileges {
    constructor (
        /**
         * @summary `operation_pac`.
         * @public
         * @readonly
         */
        readonly operation_pac: OPTIONAL<PrivilegeAttributeCertificate>,
        /**
         * @summary `proxy_pac`.
         * @public
         * @readonly
         */
        readonly proxy_pac: OPTIONAL<PrivilegeAttributeCertificate>
    ) {}

    /**
     * @summary Restructures an object into a Privileges
     * @description
     * 
     * This takes an `object` and converts it to a `Privileges`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Privileges`.
     * @returns {Privileges}
     */
    public static _from_object (_o: { [_K in keyof (Privileges)]: (Privileges)[_K] }): Privileges {
        return new Privileges(_o.operation_pac, _o.proxy_pac);
    }


}

/**
 * @summary The Leading Root Component Types of Privileges
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Privileges: $.ComponentSpec[] = [
    new $.ComponentSpec("operation-pac", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("proxy-pac", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of Privileges
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Privileges: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Privileges
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Privileges: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Privileges: $.ASN1Decoder<Privileges> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Privileges
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Privileges (el: _Element): Privileges {
    if (!_cached_decoder_for_Privileges) { _cached_decoder_for_Privileges = function (el: _Element): Privileges {
    let operation_pac: OPTIONAL<PrivilegeAttributeCertificate>;
    let proxy_pac: OPTIONAL<PrivilegeAttributeCertificate>;
    const callbacks: $.DecodingMap = {
        "operation-pac": (_el: _Element): void => { operation_pac = $._decode_implicit<PrivilegeAttributeCertificate>(() => _decode_PrivilegeAttributeCertificate)(_el); },
        "proxy-pac": (_el: _Element): void => { proxy_pac = $._decode_implicit<PrivilegeAttributeCertificate>(() => _decode_PrivilegeAttributeCertificate)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Privileges,
        _extension_additions_list_spec_for_Privileges,
        _root_component_type_list_2_spec_for_Privileges,
        undefined,
    );
    return new Privileges(
        operation_pac,
        proxy_pac
    );
}; }
    return _cached_decoder_for_Privileges(el);
}

let _cached_encoder_for_Privileges: $.ASN1Encoder<Privileges> | null = null;

/**
 * @summary Encodes a(n) Privileges into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Privileges, encoded as an ASN.1 Element.
 */
export
function _encode_Privileges (value: Privileges, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Privileges) { _cached_encoder_for_Privileges = function (value: Privileges, elGetter: $.ASN1Encoder<Privileges>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.operation_pac === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_PrivilegeAttributeCertificate, $.BER)(value.operation_pac, $.BER)),
            /* IF_ABSENT  */ ((value.proxy_pac === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_PrivilegeAttributeCertificate, $.BER)(value.proxy_pac, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Privileges(value, elGetter);
}


/* eslint-enable */

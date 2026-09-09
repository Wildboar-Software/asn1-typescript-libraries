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
import { type AccessPointName, _decode_AccessPointName, _encode_AccessPointName } from "../CAP-datatypes/AccessPointName.ta.mjs";
import { type PDPID, _decode_PDPID, _encode_PDPID } from "../CAP-datatypes/PDPID.ta.mjs";



/**
 * @summary ConnectGPRSArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectGPRSArg {PARAMETERS-BOUND: bound} ::= SEQUENCE {
 *     accessPointName    [0] AccessPointName {bound},
 *     pdpID    [1] PDPID        OPTIONAL,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class ConnectGPRSArg {
    constructor (
        /**
         * @summary `accessPointName`.
         * @public
         * @readonly
         */
        readonly accessPointName: AccessPointName,
        /**
         * @summary `pdpID`.
         * @public
         * @readonly
         */
        readonly pdpID: OPTIONAL<PDPID>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ConnectGPRSArg
     * @description
     * 
     * This takes an `object` and converts it to a `ConnectGPRSArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectGPRSArg`.
     * @returns {ConnectGPRSArg}
     */
    public static _from_object (_o: { [_K in keyof (ConnectGPRSArg)]: (ConnectGPRSArg)[_K] }): ConnectGPRSArg {
        return new ConnectGPRSArg(_o.accessPointName, _o.pdpID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ConnectGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConnectGPRSArg: $.ComponentSpec[] = [
    new $.ComponentSpec("accessPointName", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("pdpID", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ConnectGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConnectGPRSArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConnectGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConnectGPRSArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConnectGPRSArg: $.ASN1Decoder<ConnectGPRSArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectGPRSArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectGPRSArg (el: _Element): ConnectGPRSArg {
    if (!_cached_decoder_for_ConnectGPRSArg) { _cached_decoder_for_ConnectGPRSArg = function (el: _Element): ConnectGPRSArg {
    let accessPointName!: AccessPointName;
    let pdpID: OPTIONAL<PDPID>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "accessPointName": (_el: _Element): void => { accessPointName = $._decode_implicit<AccessPointName>(() => _decode_AccessPointName)(_el); },
        "pdpID": (_el: _Element): void => { pdpID = $._decode_implicit<PDPID>(() => _decode_PDPID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ConnectGPRSArg,
        _extension_additions_list_spec_for_ConnectGPRSArg,
        _root_component_type_list_2_spec_for_ConnectGPRSArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ConnectGPRSArg(
        accessPointName,
        pdpID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ConnectGPRSArg(el);
}

let _cached_encoder_for_ConnectGPRSArg: $.ASN1Encoder<ConnectGPRSArg> | null = null;

/**
 * @summary Encodes a(n) ConnectGPRSArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectGPRSArg, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectGPRSArg (value: ConnectGPRSArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectGPRSArg) { _cached_encoder_for_ConnectGPRSArg = function (value: ConnectGPRSArg, elGetter: $.ASN1Encoder<ConnectGPRSArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_AccessPointName, $.BER)(value.accessPointName, $.BER),
            /* IF_ABSENT  */ ((value.pdpID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_PDPID, $.BER)(value.pdpID, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ConnectGPRSArg(value, elGetter);
}


/* eslint-enable */

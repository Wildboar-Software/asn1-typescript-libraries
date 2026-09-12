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
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
// export { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
import { Modifier, _decode_Modifier, _encode_Modifier } from "../MMS-Object-Module-1/Modifier.ta.mjs";
// export { Modifier, _decode_Modifier, _encode_Modifier } from "../MMS-Object-Module-1/Modifier.ta.mjs";
import { ConfirmedServiceRequest, _decode_ConfirmedServiceRequest, _encode_ConfirmedServiceRequest } from "../ISO-9506-MMS-1/ConfirmedServiceRequest.ta.mjs";
// export { ConfirmedServiceRequest, _decode_ConfirmedServiceRequest, _encode_ConfirmedServiceRequest } from "../ISO-9506-MMS-1/ConfirmedServiceRequest.ta.mjs";
import { Request_Detail, _decode_Request_Detail, _encode_Request_Detail } from "../ISO-9506-MMS-1/Request-Detail.ta.mjs";
// export { Request_Detail, _decode_Request_Detail, _encode_Request_Detail } from "../ISO-9506-MMS-1/Request-Detail.ta.mjs";


/**
 * @summary Confirmed_RequestPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Confirmed-RequestPDU ::= SEQUENCE {
 *     invokeID                      Unsigned32,
 *     listOfModifiers               SEQUENCE OF Modifier OPTIONAL,
 *     service                       ConfirmedServiceRequest,
 *     ...,
 *     service-ext                   [79] Request-Detail OPTIONAL
 *     -- shall not be transmitted if value is the value
 *     -- of a tagged type derived from NULL
 * }
 * ```
 * 
 * @class
 */
export
class Confirmed_RequestPDU {
    constructor (
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: Unsigned32,
        /**
         * @summary `listOfModifiers`.
         * @public
         * @readonly
         */
        readonly listOfModifiers: OPTIONAL<Modifier[]>,
        /**
         * @summary `service`.
         * @public
         * @readonly
         */
        readonly service: ConfirmedServiceRequest,
        /**
         * @summary `service_ext`.
         * @public
         * @readonly
         */
        readonly service_ext: OPTIONAL<Request_Detail>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Confirmed_RequestPDU
     * @description
     * 
     * This takes an `object` and converts it to a `Confirmed_RequestPDU`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Confirmed_RequestPDU`.
     * @returns {Confirmed_RequestPDU}
     */
    public static _from_object (_o: { [_K in keyof (Confirmed_RequestPDU)]: (Confirmed_RequestPDU)[_K] }): Confirmed_RequestPDU {
        return new Confirmed_RequestPDU(_o.invokeID, _o.listOfModifiers, _o.service, _o.service_ext, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Confirmed_RequestPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Confirmed_RequestPDU: $.ComponentSpec[] = [
    new $.ComponentSpec("invokeID", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("listOfModifiers", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("service", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of Confirmed_RequestPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Confirmed_RequestPDU: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Confirmed_RequestPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Confirmed_RequestPDU: $.ComponentSpec[] = [
    new $.ComponentSpec("service-ext", true, $.hasTag(_TagClass.context, 79))
];

let _cached_decoder_for_Confirmed_RequestPDU: $.ASN1Decoder<Confirmed_RequestPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Confirmed_RequestPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Confirmed_RequestPDU (el: _Element): Confirmed_RequestPDU {
    if (!_cached_decoder_for_Confirmed_RequestPDU) { _cached_decoder_for_Confirmed_RequestPDU = function (el: _Element): Confirmed_RequestPDU {
    let invokeID!: Unsigned32;
    let listOfModifiers: OPTIONAL<Modifier[]>;
    let service!: ConfirmedServiceRequest;
    let service_ext: OPTIONAL<Request_Detail>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "invokeID": (_el: _Element): void => { invokeID = _decode_Unsigned32(_el); },
        "listOfModifiers": (_el: _Element): void => { listOfModifiers = $._decodeSequenceOf<Modifier>(() => _decode_Modifier)(_el); },
        "service": (_el: _Element): void => { service = _decode_ConfirmedServiceRequest(_el); },
        "service-ext": (_el: _Element): void => { service_ext = $._decode_explicit<Request_Detail>(() => _decode_Request_Detail)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Confirmed_RequestPDU,
        _extension_additions_list_spec_for_Confirmed_RequestPDU,
        _root_component_type_list_2_spec_for_Confirmed_RequestPDU,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Confirmed_RequestPDU(
        invokeID,
        listOfModifiers,
        service,
        service_ext,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Confirmed_RequestPDU(el);
}

let _cached_encoder_for_Confirmed_RequestPDU: $.ASN1Encoder<Confirmed_RequestPDU> | null = null;

/**
 * @summary Encodes a(n) Confirmed_RequestPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Confirmed_RequestPDU, encoded as an ASN.1 Element.
 */
export
function _encode_Confirmed_RequestPDU (value: Confirmed_RequestPDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Confirmed_RequestPDU) { _cached_encoder_for_Confirmed_RequestPDU = function (value: Confirmed_RequestPDU, elGetter: $.ASN1Encoder<Confirmed_RequestPDU>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Unsigned32(value.invokeID, $.BER),
            /* IF_ABSENT  */ ((value.listOfModifiers === undefined) ? undefined : $._encodeSequenceOf<Modifier>(() => _encode_Modifier, $.BER)(value.listOfModifiers, $.BER)),
            /* REQUIRED   */ _encode_ConfirmedServiceRequest(value.service, $.BER)
        ],
        [
            /* IF_ABSENT  */ ((value.service_ext === undefined) ? undefined : $._encode_explicit(_TagClass.context, 79, () => _encode_Request_Detail, $.BER)(value.service_ext, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Confirmed_RequestPDU(value, elGetter);
}


/* eslint-enable */

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
import { LogPointer, _decode_LogPointer, _encode_LogPointer } from "../ISO9041-VTP/LogPointer.ta.mjs";
// export { LogPointer, _decode_LogPointer, _encode_LogPointer } from "../ISO9041-VTP/LogPointer.ta.mjs";


/**
 * @summary DOupdate_copyLogFromBuffer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DOupdate-copyLogFromBuffer ::= SEQUENCE {
 *     address LogPointer,
 *     rioName  [8] IMPLICIT PrintableString OPTIONAL,
 *     recordId [9] IMPLICIT PrintableString OPTIONAL,
 *     -- when buffer-name is "temporary", rioName and recordId shall be absent;
 *     -- when there is only one RIO present in the VTE, rioName is optional,
 *     -- but recordId shall be present
 *     rendition [10] IMPLICIT NULL OPTIONAL,
 *     -- presence implies "copy attributes", absence implies "no attribute copy"
 *     structure [11] IMPLICIT NULL OPTIONAL,
 *     -- presence implies "x", absence implies "none"
 *     ripple [12] IMPLICIT NULL OPTIONAL
 *     -- presence implies "on", absence implies "off"
 * }
 * ```
 * 
 * @class
 */
export
class DOupdate_copyLogFromBuffer {
    constructor (
        /**
         * @summary `address`.
         * @public
         * @readonly
         */
        readonly address: LogPointer,
        /**
         * @summary `rioName`.
         * @public
         * @readonly
         */
        readonly rioName: OPTIONAL<PrintableString>,
        /**
         * @summary `recordId`.
         * @public
         * @readonly
         */
        readonly recordId: OPTIONAL<PrintableString>,
        /**
         * @summary `rendition`.
         * @public
         * @readonly
         */
        readonly rendition: OPTIONAL<NULL>,
        /**
         * @summary `structure`.
         * @public
         * @readonly
         */
        readonly structure: OPTIONAL<NULL>,
        /**
         * @summary `ripple`.
         * @public
         * @readonly
         */
        readonly ripple: OPTIONAL<NULL>
    ) {}

    /**
     * @summary Restructures an object into a DOupdate_copyLogFromBuffer
     * @description
     * 
     * This takes an `object` and converts it to a `DOupdate_copyLogFromBuffer`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DOupdate_copyLogFromBuffer`.
     * @returns {DOupdate_copyLogFromBuffer}
     */
    public static _from_object (_o: { [_K in keyof (DOupdate_copyLogFromBuffer)]: (DOupdate_copyLogFromBuffer)[_K] }): DOupdate_copyLogFromBuffer {
        return new DOupdate_copyLogFromBuffer(_o.address, _o.rioName, _o.recordId, _o.rendition, _o.structure, _o.ripple);
    }


}

/**
 * @summary The Leading Root Component Types of DOupdate_copyLogFromBuffer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DOupdate_copyLogFromBuffer: $.ComponentSpec[] = [
    new $.ComponentSpec("address", false, $.hasAnyTag),
    new $.ComponentSpec("rioName", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("recordId", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("rendition", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("structure", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("ripple", true, $.hasTag(_TagClass.context, 12))
];

/**
 * @summary The Trailing Root Component Types of DOupdate_copyLogFromBuffer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DOupdate_copyLogFromBuffer: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DOupdate_copyLogFromBuffer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DOupdate_copyLogFromBuffer: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DOupdate_copyLogFromBuffer: $.ASN1Decoder<DOupdate_copyLogFromBuffer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DOupdate_copyLogFromBuffer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DOupdate_copyLogFromBuffer (el: _Element): DOupdate_copyLogFromBuffer {
    if (!_cached_decoder_for_DOupdate_copyLogFromBuffer) { _cached_decoder_for_DOupdate_copyLogFromBuffer = function (el: _Element): DOupdate_copyLogFromBuffer {
    let address!: LogPointer;
    let rioName: OPTIONAL<PrintableString>;
    let recordId: OPTIONAL<PrintableString>;
    let rendition: OPTIONAL<NULL>;
    let structure: OPTIONAL<NULL>;
    let ripple: OPTIONAL<NULL>;
    const callbacks: $.DecodingMap = {
        "address": (_el: _Element): void => { address = _decode_LogPointer(_el); },
        "rioName": (_el: _Element): void => { rioName = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(_el); },
        "recordId": (_el: _Element): void => { recordId = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(_el); },
        "rendition": (_el: _Element): void => { rendition = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "structure": (_el: _Element): void => { structure = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "ripple": (_el: _Element): void => { ripple = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DOupdate_copyLogFromBuffer,
        _extension_additions_list_spec_for_DOupdate_copyLogFromBuffer,
        _root_component_type_list_2_spec_for_DOupdate_copyLogFromBuffer,
        undefined,
    );
    return new DOupdate_copyLogFromBuffer(
        address,
        rioName,
        recordId,
        rendition,
        structure,
        ripple
    );
}; }
    return _cached_decoder_for_DOupdate_copyLogFromBuffer(el);
}

let _cached_encoder_for_DOupdate_copyLogFromBuffer: $.ASN1Encoder<DOupdate_copyLogFromBuffer> | null = null;

/**
 * @summary Encodes a(n) DOupdate_copyLogFromBuffer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DOupdate_copyLogFromBuffer, encoded as an ASN.1 Element.
 */
export
function _encode_DOupdate_copyLogFromBuffer (value: DOupdate_copyLogFromBuffer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DOupdate_copyLogFromBuffer) { _cached_encoder_for_DOupdate_copyLogFromBuffer = function (value: DOupdate_copyLogFromBuffer, elGetter: $.ASN1Encoder<DOupdate_copyLogFromBuffer>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LogPointer(value.address, $.BER),
            /* IF_ABSENT  */ ((value.rioName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodePrintableString, $.BER)(value.rioName, $.BER)),
            /* IF_ABSENT  */ ((value.recordId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodePrintableString, $.BER)(value.recordId, $.BER)),
            /* IF_ABSENT  */ ((value.rendition === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeNull, $.BER)(value.rendition, $.BER)),
            /* IF_ABSENT  */ ((value.structure === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeNull, $.BER)(value.structure, $.BER)),
            /* IF_ABSENT  */ ((value.ripple === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => $._encodeNull, $.BER)(value.ripple, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DOupdate_copyLogFromBuffer(value, elGetter);
}


/* eslint-enable */

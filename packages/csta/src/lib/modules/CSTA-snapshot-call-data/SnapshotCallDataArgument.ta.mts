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
import * as $ from "asn1-ts/dist/functional.mjs";
import { ServiceCrossRefID, _decode_ServiceCrossRefID, _encode_ServiceCrossRefID } from "../CSTA-capability-exchange/ServiceCrossRefID.ta.mjs";
// export { ServiceCrossRefID, _decode_ServiceCrossRefID, _encode_ServiceCrossRefID } from "../CSTA-capability-exchange/ServiceCrossRefID.ta.mjs";
import { SnapshotCallData, _decode_SnapshotCallData, _encode_SnapshotCallData } from "../CSTA-status-reporting/SnapshotCallData.ta.mjs";
// export { SnapshotCallData, _decode_SnapshotCallData, _encode_SnapshotCallData } from "../CSTA-status-reporting/SnapshotCallData.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary SnapshotCallDataArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SnapshotCallDataArgument ::= SEQUENCE
 * {    serviceCrossRefID         ServiceCrossRefID,
 *     segmentID             INTEGER             OPTIONAL,
 *     lastSegment             BOOLEAN,
 *     snapshotData             SnapshotCallData,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SnapshotCallDataArgument {
    constructor (
        /**
         * @summary `serviceCrossRefID`.
         * @public
         * @readonly
         */
        readonly serviceCrossRefID: ServiceCrossRefID,
        /**
         * @summary `segmentID`.
         * @public
         * @readonly
         */
        readonly segmentID: OPTIONAL<INTEGER>,
        /**
         * @summary `lastSegment`.
         * @public
         * @readonly
         */
        readonly lastSegment: BOOLEAN,
        /**
         * @summary `snapshotData`.
         * @public
         * @readonly
         */
        readonly snapshotData: SnapshotCallData,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SnapshotCallDataArgument
     * @description
     * 
     * This takes an `object` and converts it to a `SnapshotCallDataArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SnapshotCallDataArgument`.
     * @returns {SnapshotCallDataArgument}
     */
    public static _from_object (_o: { [_K in keyof (SnapshotCallDataArgument)]: (SnapshotCallDataArgument)[_K] }): SnapshotCallDataArgument {
        return new SnapshotCallDataArgument(_o.serviceCrossRefID, _o.segmentID, _o.lastSegment, _o.snapshotData, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of SnapshotCallDataArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SnapshotCallDataArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceCrossRefID", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("segmentID", true, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("lastSegment", false, $.hasTag(_TagClass.universal, 1), undefined, undefined),
    new $.ComponentSpec("snapshotData", false, $.hasTag(_TagClass.application, 23), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SnapshotCallDataArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SnapshotCallDataArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SnapshotCallDataArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SnapshotCallDataArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SnapshotCallDataArgument: $.ASN1Decoder<SnapshotCallDataArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SnapshotCallDataArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SnapshotCallDataArgument (el: _Element): SnapshotCallDataArgument {
    if (!_cached_decoder_for_SnapshotCallDataArgument) { _cached_decoder_for_SnapshotCallDataArgument = function (el: _Element): SnapshotCallDataArgument {
    let serviceCrossRefID!: ServiceCrossRefID;
    let segmentID: OPTIONAL<INTEGER>;
    let lastSegment!: BOOLEAN;
    let snapshotData!: SnapshotCallData;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "serviceCrossRefID": (_el: _Element): void => { serviceCrossRefID = _decode_ServiceCrossRefID(_el); },
        "segmentID": (_el: _Element): void => { segmentID = $._decodeInteger(_el); },
        "lastSegment": (_el: _Element): void => { lastSegment = $._decodeBoolean(_el); },
        "snapshotData": (_el: _Element): void => { snapshotData = _decode_SnapshotCallData(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SnapshotCallDataArgument,
        _extension_additions_list_spec_for_SnapshotCallDataArgument,
        _root_component_type_list_2_spec_for_SnapshotCallDataArgument,
        undefined,
    );
    return new SnapshotCallDataArgument(
        serviceCrossRefID,
        segmentID,
        lastSegment,
        snapshotData,
        extensions
    );
}; }
    return _cached_decoder_for_SnapshotCallDataArgument(el);
}

let _cached_encoder_for_SnapshotCallDataArgument: $.ASN1Encoder<SnapshotCallDataArgument> | null = null;

/**
 * @summary Encodes a(n) SnapshotCallDataArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SnapshotCallDataArgument, encoded as an ASN.1 Element.
 */
export
function _encode_SnapshotCallDataArgument (value: SnapshotCallDataArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SnapshotCallDataArgument) { _cached_encoder_for_SnapshotCallDataArgument = function (value: SnapshotCallDataArgument, elGetter: $.ASN1Encoder<SnapshotCallDataArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ServiceCrossRefID(value.serviceCrossRefID, $.BER),
            /* IF_ABSENT  */ ((value.segmentID === undefined) ? undefined : $._encodeInteger(value.segmentID, $.BER)),
            /* REQUIRED   */ $._encodeBoolean(value.lastSegment, $.BER),
            /* REQUIRED   */ _encode_SnapshotCallData(value.snapshotData, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SnapshotCallDataArgument(value, elGetter);
}


/* eslint-enable */

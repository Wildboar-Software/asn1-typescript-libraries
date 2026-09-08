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
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";
// export { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";
import { ResourceID, _decode_ResourceID, _encode_ResourceID } from "../CSTA-device-feature-types/ResourceID.ta.mjs";
// export { ResourceID, _decode_ResourceID, _encode_ResourceID } from "../CSTA-device-feature-types/ResourceID.ta.mjs";
import { EncodingAlgorithm, _enum_for_EncodingAlgorithm, EncodingAlgorithm_aDPCM6K /* IMPORTED_LONG_ENUMERATION_ITEM */, aDPCM6K /* IMPORTED_SHORT_ENUMERATION_ITEM */, EncodingAlgorithm_aDPCM8K /* IMPORTED_LONG_ENUMERATION_ITEM */, aDPCM8K /* IMPORTED_SHORT_ENUMERATION_ITEM */, EncodingAlgorithm_muLawPCM6K /* IMPORTED_LONG_ENUMERATION_ITEM */, muLawPCM6K /* IMPORTED_SHORT_ENUMERATION_ITEM */, EncodingAlgorithm_aLawPCM6K /* IMPORTED_LONG_ENUMERATION_ITEM */, aLawPCM6K /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EncodingAlgorithm, _encode_EncodingAlgorithm } from "../CSTA-device-feature-types/EncodingAlgorithm.ta.mjs";
// export { EncodingAlgorithm, _enum_for_EncodingAlgorithm, EncodingAlgorithm_aDPCM6K /* IMPORTED_LONG_ENUMERATION_ITEM */, aDPCM6K /* IMPORTED_SHORT_ENUMERATION_ITEM */, EncodingAlgorithm_aDPCM8K /* IMPORTED_LONG_ENUMERATION_ITEM */, aDPCM8K /* IMPORTED_SHORT_ENUMERATION_ITEM */, EncodingAlgorithm_muLawPCM6K /* IMPORTED_LONG_ENUMERATION_ITEM */, muLawPCM6K /* IMPORTED_SHORT_ENUMERATION_ITEM */, EncodingAlgorithm_aLawPCM6K /* IMPORTED_LONG_ENUMERATION_ITEM */, aLawPCM6K /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EncodingAlgorithm, _encode_EncodingAlgorithm } from "../CSTA-device-feature-types/EncodingAlgorithm.ta.mjs";
import { TerminatingConditions, TerminatingConditions_durationExceeded /* IMPORTED_LONG_NAMED_BIT */, durationExceeded /* IMPORTED_SHORT_NAMED_BIT */, TerminatingConditions_dTMFDigitDetected /* IMPORTED_LONG_NAMED_BIT */, dTMFDigitDetected /* IMPORTED_SHORT_NAMED_BIT */, TerminatingConditions_endOfMessageDetected /* IMPORTED_LONG_NAMED_BIT */, endOfMessageDetected /* IMPORTED_SHORT_NAMED_BIT */, TerminatingConditions_speechDetected /* IMPORTED_LONG_NAMED_BIT */, speechDetected /* IMPORTED_SHORT_NAMED_BIT */, _decode_TerminatingConditions, _encode_TerminatingConditions } from "../CSTA-device-feature-types/TerminatingConditions.ta.mjs";
// export { TerminatingConditions, TerminatingConditions_durationExceeded /* IMPORTED_LONG_NAMED_BIT */, durationExceeded /* IMPORTED_SHORT_NAMED_BIT */, TerminatingConditions_dTMFDigitDetected /* IMPORTED_LONG_NAMED_BIT */, dTMFDigitDetected /* IMPORTED_SHORT_NAMED_BIT */, TerminatingConditions_endOfMessageDetected /* IMPORTED_LONG_NAMED_BIT */, endOfMessageDetected /* IMPORTED_SHORT_NAMED_BIT */, TerminatingConditions_speechDetected /* IMPORTED_LONG_NAMED_BIT */, speechDetected /* IMPORTED_SHORT_NAMED_BIT */, _decode_TerminatingConditions, _encode_TerminatingConditions } from "../CSTA-device-feature-types/TerminatingConditions.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary RecordMessageArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RecordMessageArgument ::= SEQUENCE
 * {    callToBeRecorded        ConnectionID,
 *     resource            [2] IMPLICIT ResourceID            OPTIONAL,
 *     samplingRate            [0] IMPLICIT INTEGER            OPTIONAL,
 *     encodingAlgorithm        EncodingAlgorithm            OPTIONAL,
 *     maxDuration            [1] IMPLICIT INTEGER            OPTIONAL,
 *     termination            TerminatingConditions            OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class RecordMessageArgument {
    constructor (
        /**
         * @summary `callToBeRecorded`.
         * @public
         * @readonly
         */
        readonly callToBeRecorded: ConnectionID,
        /**
         * @summary `resource`.
         * @public
         * @readonly
         */
        readonly resource: OPTIONAL<ResourceID>,
        /**
         * @summary `samplingRate`.
         * @public
         * @readonly
         */
        readonly samplingRate: OPTIONAL<INTEGER>,
        /**
         * @summary `encodingAlgorithm`.
         * @public
         * @readonly
         */
        readonly encodingAlgorithm: OPTIONAL<EncodingAlgorithm>,
        /**
         * @summary `maxDuration`.
         * @public
         * @readonly
         */
        readonly maxDuration: OPTIONAL<INTEGER>,
        /**
         * @summary `termination`.
         * @public
         * @readonly
         */
        readonly termination: OPTIONAL<TerminatingConditions>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a RecordMessageArgument
     * @description
     * 
     * This takes an `object` and converts it to a `RecordMessageArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RecordMessageArgument`.
     * @returns {RecordMessageArgument}
     */
    public static _from_object (_o: { [_K in keyof (RecordMessageArgument)]: (RecordMessageArgument)[_K] }): RecordMessageArgument {
        return new RecordMessageArgument(_o.callToBeRecorded, _o.resource, _o.samplingRate, _o.encodingAlgorithm, _o.maxDuration, _o.termination, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `encodingAlgorithm`
         * @public
         * @static
         */

    public static _enum_for_encodingAlgorithm = _enum_for_EncodingAlgorithm;
}

/**
 * @summary The Leading Root Component Types of RecordMessageArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RecordMessageArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("callToBeRecorded", false, $.hasTag(_TagClass.application, 11), undefined, undefined),
    new $.ComponentSpec("resource", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("samplingRate", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("encodingAlgorithm", true, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("maxDuration", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("termination", true, $.hasTag(_TagClass.universal, 3), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of RecordMessageArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RecordMessageArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RecordMessageArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RecordMessageArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RecordMessageArgument: $.ASN1Decoder<RecordMessageArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RecordMessageArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RecordMessageArgument (el: _Element): RecordMessageArgument {
    if (!_cached_decoder_for_RecordMessageArgument) { _cached_decoder_for_RecordMessageArgument = function (el: _Element): RecordMessageArgument {
    let callToBeRecorded!: ConnectionID;
    let resource: OPTIONAL<ResourceID>;
    let samplingRate: OPTIONAL<INTEGER>;
    let encodingAlgorithm: OPTIONAL<EncodingAlgorithm>;
    let maxDuration: OPTIONAL<INTEGER>;
    let termination: OPTIONAL<TerminatingConditions>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "callToBeRecorded": (_el: _Element): void => { callToBeRecorded = _decode_ConnectionID(_el); },
        "resource": (_el: _Element): void => { resource = $._decode_implicit<ResourceID>(() => _decode_ResourceID)(_el); },
        "samplingRate": (_el: _Element): void => { samplingRate = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "encodingAlgorithm": (_el: _Element): void => { encodingAlgorithm = _decode_EncodingAlgorithm(_el); },
        "maxDuration": (_el: _Element): void => { maxDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "termination": (_el: _Element): void => { termination = _decode_TerminatingConditions(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RecordMessageArgument,
        _extension_additions_list_spec_for_RecordMessageArgument,
        _root_component_type_list_2_spec_for_RecordMessageArgument,
        undefined,
    );
    return new RecordMessageArgument(
        callToBeRecorded,
        resource,
        samplingRate,
        encodingAlgorithm,
        maxDuration,
        termination,
        extensions
    );
}; }
    return _cached_decoder_for_RecordMessageArgument(el);
}

let _cached_encoder_for_RecordMessageArgument: $.ASN1Encoder<RecordMessageArgument> | null = null;

/**
 * @summary Encodes a(n) RecordMessageArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecordMessageArgument, encoded as an ASN.1 Element.
 */
export
function _encode_RecordMessageArgument (value: RecordMessageArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RecordMessageArgument) { _cached_encoder_for_RecordMessageArgument = function (value: RecordMessageArgument, elGetter: $.ASN1Encoder<RecordMessageArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.callToBeRecorded, $.BER),
            /* IF_ABSENT  */ ((value.resource === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ResourceID, $.BER)(value.resource, $.BER)),
            /* IF_ABSENT  */ ((value.samplingRate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.samplingRate, $.BER)),
            /* IF_ABSENT  */ ((value.encodingAlgorithm === undefined) ? undefined : _encode_EncodingAlgorithm(value.encodingAlgorithm, $.BER)),
            /* IF_ABSENT  */ ((value.maxDuration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.maxDuration, $.BER)),
            /* IF_ABSENT  */ ((value.termination === undefined) ? undefined : _encode_TerminatingConditions(value.termination, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RecordMessageArgument(value, elGetter);
}


/* eslint-enable */

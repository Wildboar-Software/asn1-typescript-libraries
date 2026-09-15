/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InformationToRecord_controlDigits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InformationToRecord-controlDigits {PARAMETERS-BOUND:bound} ::= SEQUENCE {
 *     endOfRecordingDigit
 *     [0]  OCTET STRING(SIZE (1..2)) OPTIONAL,
 *     cancelDigit
 *     [1]  OCTET STRING(SIZE (1..2)) OPTIONAL,
 *     replayDigit
 *     [2]  OCTET STRING(SIZE (1..2)) OPTIONAL,
 *     restartRecordingDigit
 *     [3]  OCTET STRING(SIZE (1..2)) OPTIONAL,
 *     restartAllowed         [4]  BOOLEAN DEFAULT FALSE,
 *     replayAllowed          [5]  BOOLEAN DEFAULT FALSE
 * }
 * ```
 * 
 * @class
 */
export
class InformationToRecord_controlDigits {
    constructor (
        /**
         * @summary `endOfRecordingDigit`.
         * @public
         * @readonly
         */
        readonly endOfRecordingDigit: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `cancelDigit`.
         * @public
         * @readonly
         */
        readonly cancelDigit: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `replayDigit`.
         * @public
         * @readonly
         */
        readonly replayDigit: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `restartRecordingDigit`.
         * @public
         * @readonly
         */
        readonly restartRecordingDigit: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `restartAllowed`.
         * @public
         * @readonly
         */
        readonly restartAllowed: OPTIONAL<BOOLEAN>,
        /**
         * @summary `replayAllowed`.
         * @public
         * @readonly
         */
        readonly replayAllowed: OPTIONAL<BOOLEAN>
    ) {
        if (endOfRecordingDigit !== undefined && (endOfRecordingDigit.length < 1 || endOfRecordingDigit.length > 2)) {
            throw new ASN1SizeError("InformationToRecord_controlDigits.endOfRecordingDigit violates SIZE constraint");
        }
        if (cancelDigit !== undefined && (cancelDigit.length < 1 || cancelDigit.length > 2)) {
            throw new ASN1SizeError("InformationToRecord_controlDigits.cancelDigit violates SIZE constraint");
        }
        if (replayDigit !== undefined && (replayDigit.length < 1 || replayDigit.length > 2)) {
            throw new ASN1SizeError("InformationToRecord_controlDigits.replayDigit violates SIZE constraint");
        }
        if (restartRecordingDigit !== undefined && (restartRecordingDigit.length < 1 || restartRecordingDigit.length > 2)) {
            throw new ASN1SizeError("InformationToRecord_controlDigits.restartRecordingDigit violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a InformationToRecord_controlDigits
     * @description
     * 
     * This takes an `object` and converts it to a `InformationToRecord_controlDigits`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InformationToRecord_controlDigits`.
     * @returns {InformationToRecord_controlDigits}
     */
    public static _from_object (_o: { [_K in keyof (InformationToRecord_controlDigits)]: (InformationToRecord_controlDigits)[_K] }): InformationToRecord_controlDigits {
        return new InformationToRecord_controlDigits(_o.endOfRecordingDigit, _o.cancelDigit, _o.replayDigit, _o.restartRecordingDigit, _o.restartAllowed, _o.replayAllowed);
    }

    /**
     * @summary Getter that returns the default value for `restartAllowed`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_restartAllowed () { return false; }
    /**
     * @summary Getter that returns the default value for `replayAllowed`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_replayAllowed () { return false; }
}

/**
 * @summary The Leading Root Component Types of InformationToRecord_controlDigits
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InformationToRecord_controlDigits: $.ComponentSpec[] = [
    new $.ComponentSpec("endOfRecordingDigit", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("cancelDigit", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("replayDigit", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("restartRecordingDigit", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("restartAllowed", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("replayAllowed", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of InformationToRecord_controlDigits
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InformationToRecord_controlDigits: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InformationToRecord_controlDigits
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InformationToRecord_controlDigits: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InformationToRecord_controlDigits: $.ASN1Decoder<InformationToRecord_controlDigits> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InformationToRecord_controlDigits
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InformationToRecord_controlDigits (el: _Element): InformationToRecord_controlDigits {
    if (!_cached_decoder_for_InformationToRecord_controlDigits) { _cached_decoder_for_InformationToRecord_controlDigits = function (el: _Element): InformationToRecord_controlDigits {
    let endOfRecordingDigit: OPTIONAL<OCTET_STRING>;
    let cancelDigit: OPTIONAL<OCTET_STRING>;
    let replayDigit: OPTIONAL<OCTET_STRING>;
    let restartRecordingDigit: OPTIONAL<OCTET_STRING>;
    let restartAllowed: OPTIONAL<BOOLEAN> = InformationToRecord_controlDigits._default_value_for_restartAllowed;
    let replayAllowed: OPTIONAL<BOOLEAN> = InformationToRecord_controlDigits._default_value_for_replayAllowed;
    const callbacks: $.DecodingMap = {
        "endOfRecordingDigit": (_el: _Element): void => { endOfRecordingDigit = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cancelDigit": (_el: _Element): void => { cancelDigit = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "replayDigit": (_el: _Element): void => { replayDigit = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "restartRecordingDigit": (_el: _Element): void => { restartRecordingDigit = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "restartAllowed": (_el: _Element): void => { restartAllowed = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "replayAllowed": (_el: _Element): void => { replayAllowed = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InformationToRecord_controlDigits,
        _extension_additions_list_spec_for_InformationToRecord_controlDigits,
        _root_component_type_list_2_spec_for_InformationToRecord_controlDigits,
        undefined,
    );
    return new InformationToRecord_controlDigits(
        endOfRecordingDigit,
        cancelDigit,
        replayDigit,
        restartRecordingDigit,
        restartAllowed,
        replayAllowed
    );
}; }
    return _cached_decoder_for_InformationToRecord_controlDigits(el);
}

let _cached_encoder_for_InformationToRecord_controlDigits: $.ASN1Encoder<InformationToRecord_controlDigits> | null = null;

/**
 * @summary Encodes a(n) InformationToRecord_controlDigits into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InformationToRecord_controlDigits, encoded as an ASN.1 Element.
 */
export
function _encode_InformationToRecord_controlDigits (value: InformationToRecord_controlDigits, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InformationToRecord_controlDigits) { _cached_encoder_for_InformationToRecord_controlDigits = function (value: InformationToRecord_controlDigits): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.endOfRecordingDigit === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.endOfRecordingDigit, $.BER)),
            /* IF_ABSENT  */ ((value.cancelDigit === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.cancelDigit, $.BER)),
            /* IF_ABSENT  */ ((value.replayDigit === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.replayDigit, $.BER)),
            /* IF_ABSENT  */ ((value.restartRecordingDigit === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.restartRecordingDigit, $.BER)),
            /* IF_DEFAULT */ (value.restartAllowed === undefined || $.deepEq(value.restartAllowed, InformationToRecord_controlDigits._default_value_for_restartAllowed) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.restartAllowed, $.BER)),
            /* IF_DEFAULT */ (value.replayAllowed === undefined || $.deepEq(value.replayAllowed, InformationToRecord_controlDigits._default_value_for_replayAllowed) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.replayAllowed, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_InformationToRecord_controlDigits(value, elGetter);
}


/* eslint-enable */

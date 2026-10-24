/* eslint-disable */
import {
    type GeneralizedTime,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type PayloadDirection, _decode_PayloadDirection, _encode_PayloadDirection, _enum_for_PayloadDirection } from "../LI-PS-PDU/PayloadDirection.ta.mjs";
// export { PayloadDirection, _enum_for_PayloadDirection, PayloadDirection_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, PayloadDirection_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, PayloadDirection_indeterminate /* IMPORTED_LONG_ENUMERATION_ITEM */, indeterminate /* IMPORTED_SHORT_ENUMERATION_ITEM */, PayloadDirection_combined /* IMPORTED_LONG_ENUMERATION_ITEM */, combined /* IMPORTED_SHORT_ENUMERATION_ITEM */, PayloadDirection_notapplicable /* IMPORTED_LONG_ENUMERATION_ITEM */, notapplicable /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PayloadDirection, _encode_PayloadDirection } from "../LI-PS-PDU/PayloadDirection.ta.mjs";
import { type CCContents, _decode_CCContents, _encode_CCContents } from "../LI-PS-PDU/CCContents.ta.mjs";
// export { CCContents, _decode_CCContents, _encode_CCContents } from "../LI-PS-PDU/CCContents.ta.mjs";
import { MicroSecondTimeStamp, _decode_MicroSecondTimeStamp, _encode_MicroSecondTimeStamp } from "../LI-PS-PDU/MicroSecondTimeStamp.ta.mjs";
// export { MicroSecondTimeStamp, _decode_MicroSecondTimeStamp, _encode_MicroSecondTimeStamp } from "../LI-PS-PDU/MicroSecondTimeStamp.ta.mjs";
import { type TimeStampQualifier, _decode_TimeStampQualifier, _encode_TimeStampQualifier, _enum_for_TimeStampQualifier } from "../LI-PS-PDU/TimeStampQualifier.ta.mjs";
// export { TimeStampQualifier, _enum_for_TimeStampQualifier, TimeStampQualifier_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, TimeStampQualifier_timeOfInterception /* IMPORTED_LONG_ENUMERATION_ITEM */, timeOfInterception /* IMPORTED_SHORT_ENUMERATION_ITEM */, TimeStampQualifier_timeOfMediation /* IMPORTED_LONG_ENUMERATION_ITEM */, timeOfMediation /* IMPORTED_SHORT_ENUMERATION_ITEM */, TimeStampQualifier_timeOfAggregation /* IMPORTED_LONG_ENUMERATION_ITEM */, timeOfAggregation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TimeStampQualifier, _encode_TimeStampQualifier } from "../LI-PS-PDU/TimeStampQualifier.ta.mjs";


/**
 * @summary CCPayload
 * @description
 * 
 * One HI3 payload inside `cCPayloadSequence`. Aggregation follows clause 6.2.3.
 * A large self-contained block of application data may instead be split across
 * PDUs (clause 6.2.4): each segment is its own CC payload with its own header,
 * and the sequence number increases for each segment. A `firstSegmentFlag` TRI
 * precedes the first segment and a `lastSegmentFlag` TRI follows the last; each
 * copies the segment PDU's communication identifier, authorization country
 * code, LIID, and sequence number, and should omit the timestamp.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 6.2.3, clause 6.2.4, clause
 * 5.2.6.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CCPayload ::= SEQUENCE
 * {
 *     payloadDirection        [0] PayloadDirection OPTIONAL,
 *     timeStamp               [1] GeneralizedTime OPTIONAL,
 *         -- For aggregated payloads (see clause 6.2.3)
 *     cCContents              [2] CCContents,
 *     ...,
 *     microSecondTimeStamp    [3] MicroSecondTimeStamp OPTIONAL,
 *         -- For aggregated payloads (see clause 6.2.3)
 *     timeStampQualifier      [4] TimeStampQualifier OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CCPayload {
    /**
     * @summary `payloadDirection`.
     * @description
     *
     * Direction of this CC. Optional.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.7.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly payloadDirection: OPTIONAL<PayloadDirection>;
    /**
     * @summary `timeStamp`.
     * @description
     *
     * Time of this CC payload. CC shall carry a timestamp unless the
     * service-specific standard makes an exception. On an aggregated PDU this
     * is the per-payload time.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.6, clause 6.2.3.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly timeStamp: OPTIONAL<GeneralizedTime>;
    /**
     * @summary `cCContents`.
     * @description
     *
     * Service-specific content of communication.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.9, clause 4.3.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly cCContents: CCContents;
    /**
     * @summary `microSecondTimeStamp`.
     * @description
     *
     * Microsecond form of this payload's time, for the aggregated case.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.6, clause 6.2.3.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly microSecondTimeStamp: OPTIONAL<MicroSecondTimeStamp>;
    /**
     * @summary `timeStampQualifier`.
     * @description
     *
     * What this payload's timestamp represents.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 6.2.3.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly timeStampQualifier: OPTIONAL<TimeStampQualifier>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     *
     * Extension additions this version of the module does not name.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 6.2.3, clause 6.2.4, clause
     * 5.2.6.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        payloadDirection: OPTIONAL<PayloadDirection>,
        timeStamp: OPTIONAL<GeneralizedTime>,
        cCContents: CCContents,
        microSecondTimeStamp?: OPTIONAL<MicroSecondTimeStamp>,
        timeStampQualifier?: OPTIONAL<TimeStampQualifier>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.payloadDirection = payloadDirection;
        this.timeStamp = timeStamp;
        this.cCContents = cCContents;
        this.microSecondTimeStamp = microSecondTimeStamp;
        this.timeStampQualifier = timeStampQualifier;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a CCPayload
     * @description
     * 
     * This takes an `object` and converts it to a `CCPayload`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CCPayload`.
     * @returns {CCPayload}
     */
    public static _from_object (_o: { [_K in keyof (CCPayload)]: (CCPayload)[_K] }): CCPayload {
        return new CCPayload(_o.payloadDirection, _o.timeStamp, _o.cCContents, _o.microSecondTimeStamp, _o.timeStampQualifier, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `payloadDirection`
         * @public
         * @static
         */

    public static _enum_for_payloadDirection = _enum_for_PayloadDirection;        /**
         * @summary The enum used as the type of the component `timeStampQualifier`
         * @public
         * @static
         */

    public static _enum_for_timeStampQualifier = _enum_for_TimeStampQualifier;
}

/**
 * @summary The Leading Root Component Types of CCPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CCPayload: $.ComponentSpec[] = [
    new $.ComponentSpec("payloadDirection", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("timeStamp", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cCContents", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of CCPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CCPayload: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CCPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CCPayload: $.ComponentSpec[] = [
    new $.ComponentSpec("microSecondTimeStamp", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("timeStampQualifier", true, $.hasTag(_TagClass.context, 4))
];

let _cached_decoder_for_CCPayload: $.ASN1Decoder<CCPayload> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CCPayload
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CCPayload (el: _Element): CCPayload {
    if (!_cached_decoder_for_CCPayload) { _cached_decoder_for_CCPayload = function (el: _Element): CCPayload {
    let payloadDirection: OPTIONAL<PayloadDirection>;
    let timeStamp: OPTIONAL<GeneralizedTime>;
    let cCContents!: CCContents;
    let microSecondTimeStamp: OPTIONAL<MicroSecondTimeStamp>;
    let timeStampQualifier: OPTIONAL<TimeStampQualifier>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "payloadDirection": (_el: _Element): void => { payloadDirection = $._decode_implicit<PayloadDirection>(() => _decode_PayloadDirection)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "cCContents": (_el: _Element): void => { cCContents = $._decode_explicit<CCContents>(() => _decode_CCContents)(_el); },
        "microSecondTimeStamp": (_el: _Element): void => { microSecondTimeStamp = $._decode_implicit<MicroSecondTimeStamp>(() => _decode_MicroSecondTimeStamp)(_el); },
        "timeStampQualifier": (_el: _Element): void => { timeStampQualifier = $._decode_implicit<TimeStampQualifier>(() => _decode_TimeStampQualifier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CCPayload,
        _extension_additions_list_spec_for_CCPayload,
        _root_component_type_list_2_spec_for_CCPayload,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CCPayload(
        payloadDirection,
        timeStamp,
        cCContents,
        microSecondTimeStamp,
        timeStampQualifier,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CCPayload(el);
}

let _cached_encoder_for_CCPayload: $.ASN1Encoder<CCPayload> | null = null;

/**
 * @summary Encodes a(n) CCPayload into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CCPayload, encoded as an ASN.1 Element.
 */
export
function _encode_CCPayload (value: CCPayload, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CCPayload) { _cached_encoder_for_CCPayload = function (value: CCPayload, elGetter: $.ASN1Encoder<CCPayload>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.payloadDirection !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_PayloadDirection, $.BER)(value.payloadDirection, $.BER);
    }
    if (value.timeStamp !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeGeneralizedTime, $.BER)(value.timeStamp, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_CCContents, $.BER)(value.cCContents, $.BER);
    if (value.microSecondTimeStamp !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_MicroSecondTimeStamp, $.BER)(value.microSecondTimeStamp, $.BER);
    }
    if (value.timeStampQualifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_TimeStampQualifier, $.BER)(value.timeStampQualifier, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CCPayload(value, elGetter);
}


/* eslint-enable */

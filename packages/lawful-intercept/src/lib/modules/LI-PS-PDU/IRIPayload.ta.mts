/* eslint-disable */
import {
    GeneralizedTime,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IRIType, _decode_IRIType, _encode_IRIType, _enum_for_IRIType } from "../LI-PS-PDU/IRIType.ta.mjs";
// export { IRIType, _enum_for_IRIType, IRIType_iRI_Begin /* IMPORTED_LONG_ENUMERATION_ITEM */, iRI_Begin /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRIType_iRI_End /* IMPORTED_LONG_ENUMERATION_ITEM */, iRI_End /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRIType_iRI_Continue /* IMPORTED_LONG_ENUMERATION_ITEM */, iRI_Continue /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRIType_iRI_Report /* IMPORTED_LONG_ENUMERATION_ITEM */, iRI_Report /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IRIType, _encode_IRIType } from "../LI-PS-PDU/IRIType.ta.mjs";
import { IRIContents, _decode_IRIContents, _encode_IRIContents } from "../LI-PS-PDU/IRIContents.ta.mjs";
// export { IRIContents, _decode_IRIContents, _encode_IRIContents } from "../LI-PS-PDU/IRIContents.ta.mjs";
import { MicroSecondTimeStamp, _decode_MicroSecondTimeStamp, _encode_MicroSecondTimeStamp } from "../LI-PS-PDU/MicroSecondTimeStamp.ta.mjs";
// export { MicroSecondTimeStamp, _decode_MicroSecondTimeStamp, _encode_MicroSecondTimeStamp } from "../LI-PS-PDU/MicroSecondTimeStamp.ta.mjs";
import { TimeStampQualifier, _decode_TimeStampQualifier, _encode_TimeStampQualifier, _enum_for_TimeStampQualifier } from "../LI-PS-PDU/TimeStampQualifier.ta.mjs";
// export { TimeStampQualifier, _enum_for_TimeStampQualifier, TimeStampQualifier_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, TimeStampQualifier_timeOfInterception /* IMPORTED_LONG_ENUMERATION_ITEM */, timeOfInterception /* IMPORTED_SHORT_ENUMERATION_ITEM */, TimeStampQualifier_timeOfMediation /* IMPORTED_LONG_ENUMERATION_ITEM */, timeOfMediation /* IMPORTED_SHORT_ENUMERATION_ITEM */, TimeStampQualifier_timeOfAggregation /* IMPORTED_LONG_ENUMERATION_ITEM */, timeOfAggregation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TimeStampQualifier, _encode_TimeStampQualifier } from "../LI-PS-PDU/TimeStampQualifier.ta.mjs";
import { PayloadDirection, _decode_PayloadDirection, _encode_PayloadDirection, _enum_for_PayloadDirection } from "../LI-PS-PDU/PayloadDirection.ta.mjs";
// export { PayloadDirection, _enum_for_PayloadDirection, PayloadDirection_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, PayloadDirection_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, PayloadDirection_indeterminate /* IMPORTED_LONG_ENUMERATION_ITEM */, indeterminate /* IMPORTED_SHORT_ENUMERATION_ITEM */, PayloadDirection_combined /* IMPORTED_LONG_ENUMERATION_ITEM */, combined /* IMPORTED_SHORT_ENUMERATION_ITEM */, PayloadDirection_notapplicable /* IMPORTED_LONG_ENUMERATION_ITEM */, notapplicable /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PayloadDirection, _encode_PayloadDirection } from "../LI-PS-PDU/PayloadDirection.ta.mjs";


/**
 * @summary IRIPayload
 * @description
 * 
 * One HI2 payload inside `iRIPayloadSequence`. Several may share a PDU only
 * under the aggregation rules in clause 6.2.3. The IRI type is mandatory. A
 * timestamp is mandatory for IRI; when payloads are aggregated, put each
 * payload's own time here (GeneralizedTime or the microsecond form).
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.6, clause 5.2.10, clause
 * 6.2.3.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRIPayload ::= SEQUENCE
 * {
 *     iRIType                 [0] IRIType OPTIONAL,
 *         -- See clause 5.2.10
 *     timeStamp               [1] GeneralizedTime OPTIONAL,
 *         -- For aggregated payloads (see clause 6.2.3)
 *     iRIContents             [2] IRIContents,
 *     ...,
 *     microSecondTimeStamp    [3] MicroSecondTimeStamp OPTIONAL,
 *         -- For aggregated payloads (see clause 6.2.3)
 *     timeStampQualifier      [4] TimeStampQualifier OPTIONAL,
 *     sessionDirection        [5] PayloadDirection OPTIONAL,
 *         -- If the sessionDirection field is to be used for a given service then
 *         -- the exact meaning and use of the field will be described in the
 *         -- relevant service-specific details
 *     payloadDirection        [6] PayloadDirection OPTIONAL
 *         -- If the payloadDirection field is to be used for a given service then
 *         -- the exact meaning and use of the field will be described in the
 *         -- relevant service-specific details
 * }
 * ```
 * 
 * @class
 */
export
class IRIPayload {
    /**
     * @summary `iRIType`.
     * @description
     *
     * BEGIN, CONTINUE, END, or REPORT. Mandatory for every IRI, including when
     * `iRIContents` already indicates the message type. Mandatory in all
     * conditions from V3.25.1.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.10.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly iRIType: OPTIONAL<IRIType>;
    /**
     * @summary `timeStamp`.
     * @description
     *
     * Time of this payload, used when several IRI payloads are aggregated and
     * each needs its own time. See the header timestamp for which clock form is
     * used.
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
     * @summary `iRIContents`.
     * @description
     *
     * Service-specific IRI. The choice is the service-specific standard used
     * with this header (clause 5.2.9).
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.9, clause 4.3.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly iRIContents: IRIContents;
    /**
     * @summary `microSecondTimeStamp`.
     * @description
     *
     * Microsecond form of this payload's time, for the aggregated case.
     * National agreement chooses between this and `timeStamp`.
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
     * What this payload's timestamp represents, when a qualifier is wanted on
     * an aggregated payload.
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
     * @summary `sessionDirection`.
     * @description
     *
     * Optional direction of the session. Use it only where the service-specific
     * standard says so, and only as that standard describes. The meaning is
     * defined there, not in this module.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.12.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly sessionDirection: OPTIONAL<PayloadDirection>;
    /**
     * @summary `payloadDirection`.
     * @description
     *
     * Optional direction of this IRI payload. Use it only where the
     * service-specific standard says so, and only as that standard describes.
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
     * @summary Extensions that are not recognized.
     * @description
     *
     * Extension additions this version of the module does not name.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.6, clause 5.2.10, clause
     * 6.2.3.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        iRIType: OPTIONAL<IRIType>,
        timeStamp: OPTIONAL<GeneralizedTime>,
        iRIContents: IRIContents,
        microSecondTimeStamp?: OPTIONAL<MicroSecondTimeStamp>,
        timeStampQualifier?: OPTIONAL<TimeStampQualifier>,
        sessionDirection?: OPTIONAL<PayloadDirection>,
        payloadDirection?: OPTIONAL<PayloadDirection>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.iRIType = iRIType;
        this.timeStamp = timeStamp;
        this.iRIContents = iRIContents;
        this.microSecondTimeStamp = microSecondTimeStamp;
        this.timeStampQualifier = timeStampQualifier;
        this.sessionDirection = sessionDirection;
        this.payloadDirection = payloadDirection;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IRIPayload
     * @description
     * 
     * This takes an `object` and converts it to a `IRIPayload`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IRIPayload`.
     * @returns {IRIPayload}
     */
    public static _from_object (_o: { [_K in keyof (IRIPayload)]: (IRIPayload)[_K] }): IRIPayload {
        return new IRIPayload(_o.iRIType, _o.timeStamp, _o.iRIContents, _o.microSecondTimeStamp, _o.timeStampQualifier, _o.sessionDirection, _o.payloadDirection, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `iRIType`
         * @public
         * @static
         */

    public static _enum_for_iRIType = _enum_for_IRIType;        /**
         * @summary The enum used as the type of the component `timeStampQualifier`
         * @public
         * @static
         */

    public static _enum_for_timeStampQualifier = _enum_for_TimeStampQualifier;        /**
         * @summary The enum used as the type of the component `sessionDirection`
         * @public
         * @static
         */

    public static _enum_for_sessionDirection = _enum_for_PayloadDirection;        /**
         * @summary The enum used as the type of the component `payloadDirection`
         * @public
         * @static
         */

    public static _enum_for_payloadDirection = _enum_for_PayloadDirection;
}

/**
 * @summary The Leading Root Component Types of IRIPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IRIPayload: $.ComponentSpec[] = [
    new $.ComponentSpec("iRIType", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("timeStamp", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iRIContents", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of IRIPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IRIPayload: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IRIPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IRIPayload: $.ComponentSpec[] = [
    new $.ComponentSpec("microSecondTimeStamp", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("timeStampQualifier", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sessionDirection", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("payloadDirection", true, $.hasTag(_TagClass.context, 6))
];

let _cached_decoder_for_IRIPayload: $.ASN1Decoder<IRIPayload> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IRIPayload
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IRIPayload (el: _Element): IRIPayload {
    if (!_cached_decoder_for_IRIPayload) { _cached_decoder_for_IRIPayload = function (el: _Element): IRIPayload {
    let iRIType: OPTIONAL<IRIType>;
    let timeStamp: OPTIONAL<GeneralizedTime>;
    let iRIContents!: IRIContents;
    let microSecondTimeStamp: OPTIONAL<MicroSecondTimeStamp>;
    let timeStampQualifier: OPTIONAL<TimeStampQualifier>;
    let sessionDirection: OPTIONAL<PayloadDirection>;
    let payloadDirection: OPTIONAL<PayloadDirection>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "iRIType": (_el: _Element): void => { iRIType = $._decode_implicit<IRIType>(() => _decode_IRIType)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "iRIContents": (_el: _Element): void => { iRIContents = $._decode_explicit<IRIContents>(() => _decode_IRIContents)(_el); },
        "microSecondTimeStamp": (_el: _Element): void => { microSecondTimeStamp = $._decode_implicit<MicroSecondTimeStamp>(() => _decode_MicroSecondTimeStamp)(_el); },
        "timeStampQualifier": (_el: _Element): void => { timeStampQualifier = $._decode_implicit<TimeStampQualifier>(() => _decode_TimeStampQualifier)(_el); },
        "sessionDirection": (_el: _Element): void => { sessionDirection = $._decode_implicit<PayloadDirection>(() => _decode_PayloadDirection)(_el); },
        "payloadDirection": (_el: _Element): void => { payloadDirection = $._decode_implicit<PayloadDirection>(() => _decode_PayloadDirection)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IRIPayload,
        _extension_additions_list_spec_for_IRIPayload,
        _root_component_type_list_2_spec_for_IRIPayload,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IRIPayload(
        iRIType,
        timeStamp,
        iRIContents,
        microSecondTimeStamp,
        timeStampQualifier,
        sessionDirection,
        payloadDirection,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IRIPayload(el);
}

let _cached_encoder_for_IRIPayload: $.ASN1Encoder<IRIPayload> | null = null;

/**
 * @summary Encodes a(n) IRIPayload into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IRIPayload, encoded as an ASN.1 Element.
 */
export
function _encode_IRIPayload (value: IRIPayload, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IRIPayload) { _cached_encoder_for_IRIPayload = function (value: IRIPayload, elGetter: $.ASN1Encoder<IRIPayload>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(7 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.iRIType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_IRIType, $.BER)(value.iRIType, $.BER);
    }
    if (value.timeStamp !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeGeneralizedTime, $.BER)(value.timeStamp, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_IRIContents, $.BER)(value.iRIContents, $.BER);
    if (value.microSecondTimeStamp !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_MicroSecondTimeStamp, $.BER)(value.microSecondTimeStamp, $.BER);
    }
    if (value.timeStampQualifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_TimeStampQualifier, $.BER)(value.timeStampQualifier, $.BER);
    }
    if (value.sessionDirection !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_PayloadDirection, $.BER)(value.sessionDirection, $.BER);
    }
    if (value.payloadDirection !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_PayloadDirection, $.BER)(value.payloadDirection, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IRIPayload(value, elGetter);
}


/* eslint-enable */

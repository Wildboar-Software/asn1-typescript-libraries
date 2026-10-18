/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CaseId, _decode_CaseId, _encode_CaseId } from "../PCESP/CaseId.ta.mjs";
// export { CaseId, _decode_CaseId, _encode_CaseId } from "../PCESP/CaseId.ta.mjs";
import { AccessingElementId, _decode_AccessingElementId, _encode_AccessingElementId } from "../PCESP/AccessingElementId.ta.mjs";
// export { AccessingElementId, _decode_AccessingElementId, _encode_AccessingElementId } from "../PCESP/AccessingElementId.ta.mjs";
import { EventTime, _decode_EventTime, _encode_EventTime } from "../PCESP/EventTime.ta.mjs";
// export { EventTime, _decode_EventTime, _encode_EventTime } from "../PCESP/EventTime.ta.mjs";
import { CCCId, _decode_CCCId, _encode_CCCId } from "../PCESP/CCCId.ta.mjs";
// export { CCCId, _decode_CCCId, _encode_CCCId } from "../PCESP/CCCId.ta.mjs";
import { FlowDirection, _decode_FlowDirection, _encode_FlowDirection, _enum_for_FlowDirection } from "../PCESP/FlowDirection.ta.mjs";
// export { FlowDirection, _enum_for_FlowDirection, FlowDirection_downstream /* IMPORTED_LONG_ENUMERATION_ITEM */, downstream /* IMPORTED_SHORT_ENUMERATION_ITEM */, FlowDirection_upstream /* IMPORTED_LONG_ENUMERATION_ITEM */, upstream /* IMPORTED_SHORT_ENUMERATION_ITEM */, FlowDirection_downstream_and_upstream /* IMPORTED_LONG_ENUMERATION_ITEM */, downstream_and_upstream /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FlowDirection, _encode_FlowDirection } from "../PCESP/FlowDirection.ta.mjs";


/**
 * @summary CCClose
 * @description
 *
 * Message alternative carrying the call-content identifier and a flow
 * direction. It has no call identifier.
 *
 * This edition does not define the event that produces it. See `CCCId` and
 * `FlowDirection`.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CCClose ::= SEQUENCE {
 *     caseId                  [0] CaseId,
 *     accessingElementId      [1] AccessingElementId,
 *     eventTime               [2] EventTime,
 *     cCCId                   [3] EXPLICIT CCCId,
 *     flowDirection           [4] FlowDirection,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class CCClose {
    /**
     * @summary `caseId`.
     * @description
     *
     * Intercept case identifier. This edition does not define how it is
     * assigned. See `CaseId`.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly caseId: CaseId;
    /**
     * @summary `accessingElementId`.
     * @description
     *
     * Statically configured element number of the reporting element.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly accessingElementId: AccessingElementId;
    /**
     * @summary `eventTime`.
     * @description
     *
     * Time of this message, as `GeneralizedTime`. This edition does not say
     * which instant is recorded. It is a different field from the `UTCTime`
     * timestamp on `TARGETACTIVITYMONITOR` (clause 8.4.2.1.3).
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly eventTime: EventTime;
    /**
     * @summary `cCCId`.
     * @description
     *
     * Call-content identifier. The Delivery Function generates it from the
     * 32-bit CCC-Identifier of the corresponding call-content packet stream.
     * See `CCCId`.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly cCCId: CCCId;
    /**
     * @summary `flowDirection`.
     * @description
     *
     * Downstream, upstream, or both. This edition does not define those
     * directions. See `FlowDirection`.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly flowDirection: FlowDirection;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        caseId: CaseId,
        accessingElementId: AccessingElementId,
        eventTime: EventTime,
        cCCId: CCCId,
        flowDirection: FlowDirection,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.caseId = caseId;
        this.accessingElementId = accessingElementId;
        this.eventTime = eventTime;
        this.cCCId = cCCId;
        this.flowDirection = flowDirection;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a CCClose
     * @description
     * 
     * This takes an `object` and converts it to a `CCClose`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CCClose`.
     * @returns {CCClose}
     */
    public static _from_object (_o: { [_K in keyof (CCClose)]: (CCClose)[_K] }): CCClose {
        return new CCClose(_o.caseId, _o.accessingElementId, _o.eventTime, _o.cCCId, _o.flowDirection, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `flowDirection`
         * @public
         * @static
         */

    public static _enum_for_flowDirection = _enum_for_FlowDirection;
}

/**
 * @summary The Leading Root Component Types of CCClose
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CCClose: $.ComponentSpec[] = [
    new $.ComponentSpec("caseId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("accessingElementId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eventTime", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("cCCId", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("flowDirection", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of CCClose
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CCClose: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CCClose
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CCClose: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CCClose: $.ASN1Decoder<CCClose> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CCClose
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CCClose (el: _Element): CCClose {
    if (!_cached_decoder_for_CCClose) { _cached_decoder_for_CCClose = function (el: _Element): CCClose {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 5) {
        throw new _ConstructionError("CCClose contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "caseId";
    sequence[1].name = "accessingElementId";
    sequence[2].name = "eventTime";
    sequence[3].name = "cCCId";
    sequence[4].name = "flowDirection";
    let caseId!: CaseId;
    let accessingElementId!: AccessingElementId;
    let eventTime!: EventTime;
    let cCCId!: CCCId;
    let flowDirection!: FlowDirection;
    caseId = $._decode_implicit<CaseId>(() => _decode_CaseId)(sequence[0]);
    accessingElementId = $._decode_implicit<AccessingElementId>(() => _decode_AccessingElementId)(sequence[1]);
    eventTime = $._decode_implicit<EventTime>(() => _decode_EventTime)(sequence[2]);
    cCCId = $._decode_explicit<CCCId>(() => _decode_CCCId)(sequence[3]);
    flowDirection = $._decode_implicit<FlowDirection>(() => _decode_FlowDirection)(sequence[4]);
    return new CCClose(
        caseId,
        accessingElementId,
        eventTime,
        cCCId,
        flowDirection,
        sequence.slice(5),
    );
}; }
    return _cached_decoder_for_CCClose(el);
}

let _cached_encoder_for_CCClose: $.ASN1Encoder<CCClose> | null = null;

/**
 * @summary Encodes a(n) CCClose into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CCClose, encoded as an ASN.1 Element.
 */
export
function _encode_CCClose (value: CCClose, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CCClose) { _cached_encoder_for_CCClose = function (value: CCClose, elGetter: $.ASN1Encoder<CCClose>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CaseId, $.BER)(value.caseId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AccessingElementId, $.BER)(value.accessingElementId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EventTime, $.BER)(value.eventTime, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_CCCId, $.BER)(value.cCCId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_FlowDirection, $.BER)(value.flowDirection, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CCClose(value, elGetter);
}


/* eslint-enable */

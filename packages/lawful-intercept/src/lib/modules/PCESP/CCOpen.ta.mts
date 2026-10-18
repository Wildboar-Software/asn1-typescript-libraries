/* eslint-disable */
import {
    OPTIONAL,
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
import { CCOpen_ccOpenOption, _decode_CCOpen_ccOpenOption, _encode_CCOpen_ccOpenOption } from "../PCESP/CCOpen-ccOpenOption.ta.mjs";
// export { CCOpen_ccOpenOption, _decode_CCOpen_ccOpenOption, _encode_CCOpen_ccOpenOption } from "../PCESP/CCOpen-ccOpenOption.ta.mjs";
import { CCCId, _decode_CCCId, _encode_CCCId } from "../PCESP/CCCId.ta.mjs";
// export { CCCId, _decode_CCCId, _encode_CCCId } from "../PCESP/CCCId.ta.mjs";
import { SDP, _decode_SDP, _encode_SDP } from "../PCESP/SDP.ta.mjs";
// export { SDP, _decode_SDP, _encode_SDP } from "../PCESP/SDP.ta.mjs";
import { FlowDirection, _decode_FlowDirection, _encode_FlowDirection, _enum_for_FlowDirection } from "../PCESP/FlowDirection.ta.mjs";
// export { FlowDirection, _enum_for_FlowDirection, FlowDirection_downstream /* IMPORTED_LONG_ENUMERATION_ITEM */, downstream /* IMPORTED_SHORT_ENUMERATION_ITEM */, FlowDirection_upstream /* IMPORTED_LONG_ENUMERATION_ITEM */, upstream /* IMPORTED_SHORT_ENUMERATION_ITEM */, FlowDirection_downstream_and_upstream /* IMPORTED_LONG_ENUMERATION_ITEM */, downstream_and_upstream /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FlowDirection, _encode_FlowDirection } from "../PCESP/FlowDirection.ta.mjs";


/**
 * @summary CCOpen
 * @description
 *
 * Message alternative carrying a call-content identifier, a flow direction,
 * optional SDP for `subject` and `associate`, and `ccOpenOption`.
 *
 * `ccOpenOption` is either `ccOpenTime`, a sequence of `CallId`, or
 * `reserved0`, which is `NULL` and marked reserved. This edition does not
 * define which calls `ccOpenTime` lists, or the event that produces the
 * message.
 *
 * Annex B says the SDP parameters the CMS copies to the mediation function
 * include the encryption keys. This edition does not define how `subject` and
 * `associate` differ. See `SDP`.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annexes A and B.
 *
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CCOpen ::= SEQUENCE {
 *     caseId                  [0] CaseId,
 *     accessingElementId      [1] AccessingElementId,
 *     eventTime               [2] EventTime,
 *     ccOpenOption            CHOICE {
 *         ccOpenTime  [3] SEQUENCE OF CallId,
 *         reserved0   [4] NULL, -- Reserved
 *         ...
 *     },
 *     cCCId                   [5] EXPLICIT CCCId,
 *     subject                 [6] SDP OPTIONAL,
 *     associate               [7] SDP OPTIONAL,
 *     flowDirection           [8] FlowDirection,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class CCOpen {
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
     * @summary `ccOpenOption`.
     * @description
     *
     * Either `ccOpenTime`, a sequence of call identifiers, or `reserved0`
     * (`NULL`, marked reserved). This edition does not define which calls are
     * listed.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly ccOpenOption: CCOpen_ccOpenOption;
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
     * @summary `subject`.
     * @description
     *
     * SDP for one party to the media. Annex B says SDP copied to the mediation
     * function includes the encryption keys. This edition does not define how
     * this differs from `associate`. See `SDP`.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly subject: OPTIONAL<SDP>;
    /**
     * @summary `associate`.
     * @description
     *
     * SDP for one party to the media. Annex B says SDP copied to the mediation
     * function includes the encryption keys. This edition does not define how
     * this differs from `subject`. See `SDP`.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly associate: OPTIONAL<SDP>;
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
        ccOpenOption: CCOpen_ccOpenOption,
        cCCId: CCCId,
        subject: OPTIONAL<SDP>,
        associate: OPTIONAL<SDP>,
        flowDirection: FlowDirection,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.caseId = caseId;
        this.accessingElementId = accessingElementId;
        this.eventTime = eventTime;
        this.ccOpenOption = ccOpenOption;
        this.cCCId = cCCId;
        this.subject = subject;
        this.associate = associate;
        this.flowDirection = flowDirection;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a CCOpen
     * @description
     * 
     * This takes an `object` and converts it to a `CCOpen`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CCOpen`.
     * @returns {CCOpen}
     */
    public static _from_object (_o: { [_K in keyof (CCOpen)]: (CCOpen)[_K] }): CCOpen {
        return new CCOpen(_o.caseId, _o.accessingElementId, _o.eventTime, _o.ccOpenOption, _o.cCCId, _o.subject, _o.associate, _o.flowDirection, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `flowDirection`
         * @public
         * @static
         */

    public static _enum_for_flowDirection = _enum_for_FlowDirection;
}

/**
 * @summary The Leading Root Component Types of CCOpen
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CCOpen: $.ComponentSpec[] = [
    new $.ComponentSpec("caseId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("accessingElementId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eventTime", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("ccOpenOption", false, $.hasAnyTag),
    new $.ComponentSpec("cCCId", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("subject", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("associate", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("flowDirection", false, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of CCOpen
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CCOpen: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CCOpen
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CCOpen: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CCOpen: $.ASN1Decoder<CCOpen> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CCOpen
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CCOpen (el: _Element): CCOpen {
    if (!_cached_decoder_for_CCOpen) { _cached_decoder_for_CCOpen = function (el: _Element): CCOpen {
    let caseId!: CaseId;
    let accessingElementId!: AccessingElementId;
    let eventTime!: EventTime;
    let ccOpenOption!: CCOpen_ccOpenOption;
    let cCCId!: CCCId;
    let subject: OPTIONAL<SDP>;
    let associate: OPTIONAL<SDP>;
    let flowDirection!: FlowDirection;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "caseId": (_el: _Element): void => { caseId = $._decode_implicit<CaseId>(() => _decode_CaseId)(_el); },
        "accessingElementId": (_el: _Element): void => { accessingElementId = $._decode_implicit<AccessingElementId>(() => _decode_AccessingElementId)(_el); },
        "eventTime": (_el: _Element): void => { eventTime = $._decode_implicit<EventTime>(() => _decode_EventTime)(_el); },
        "ccOpenOption": (_el: _Element): void => { ccOpenOption = _decode_CCOpen_ccOpenOption(_el); },
        "cCCId": (_el: _Element): void => { cCCId = $._decode_explicit<CCCId>(() => _decode_CCCId)(_el); },
        "subject": (_el: _Element): void => { subject = $._decode_implicit<SDP>(() => _decode_SDP)(_el); },
        "associate": (_el: _Element): void => { associate = $._decode_implicit<SDP>(() => _decode_SDP)(_el); },
        "flowDirection": (_el: _Element): void => { flowDirection = $._decode_implicit<FlowDirection>(() => _decode_FlowDirection)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CCOpen,
        _extension_additions_list_spec_for_CCOpen,
        _root_component_type_list_2_spec_for_CCOpen,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CCOpen(
        caseId,
        accessingElementId,
        eventTime,
        ccOpenOption,
        cCCId,
        subject,
        associate,
        flowDirection,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CCOpen(el);
}

let _cached_encoder_for_CCOpen: $.ASN1Encoder<CCOpen> | null = null;

/**
 * @summary Encodes a(n) CCOpen into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CCOpen, encoded as an ASN.1 Element.
 */
export
function _encode_CCOpen (value: CCOpen, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CCOpen) { _cached_encoder_for_CCOpen = function (value: CCOpen, elGetter: $.ASN1Encoder<CCOpen>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(8 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CaseId, $.BER)(value.caseId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AccessingElementId, $.BER)(value.accessingElementId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EventTime, $.BER)(value.eventTime, $.BER);
    _components[_components_i++] = /* REQUIRED   */ _encode_CCOpen_ccOpenOption(value.ccOpenOption, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 5, () => _encode_CCCId, $.BER)(value.cCCId, $.BER);
    if (value.subject !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_SDP, $.BER)(value.subject, $.BER);
    }
    if (value.associate !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_SDP, $.BER)(value.associate, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_FlowDirection, $.BER)(value.flowDirection, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CCOpen(value, elGetter);
}


/* eslint-enable */

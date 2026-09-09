/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { CdrNotification, _decode_CdrNotification, _encode_CdrNotification } from "../CSTA-capability-exchange/CdrNotification.ta.mjs";

import { CdrReport, _decode_CdrReport, _encode_CdrReport } from "../CSTA-capability-exchange/CdrReport.ta.mjs";

import { SendStoredCDRs, _decode_SendStoredCDRs, _encode_SendStoredCDRs } from "../CSTA-capability-exchange/SendStoredCDRs.ta.mjs";

import { StartCDRTransmission, _decode_StartCDRTransmission, _encode_StartCDRTransmission } from "../CSTA-capability-exchange/StartCDRTransmission.ta.mjs";

import { StopCDRTransmission, _decode_StopCDRTransmission, _encode_StopCDRTransmission } from "../CSTA-capability-exchange/StopCDRTransmission.ta.mjs";



/**
 * @summary CDRServList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CDRServList ::= SEQUENCE
 * {     cdrNotification         [ 0] IMPLICIT     CdrNotification         OPTIONAL,
 *     cdrReport             [ 1] IMPLICIT     CdrReport             OPTIONAL,
 *     sendStoredCDRs             [ 2] IMPLICIT     SendStoredCDRs             OPTIONAL,
 *     startCDRTransmission         [ 3] IMPLICIT     StartCDRTransmission         OPTIONAL,
 *     stopCDRTransmission         [ 4] IMPLICIT     StopCDRTransmission         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CDRServList {
    constructor (
        /**
         * @summary `cdrNotification`.
         * @public
         * @readonly
         */
        readonly cdrNotification: OPTIONAL<CdrNotification>,
        /**
         * @summary `cdrReport`.
         * @public
         * @readonly
         */
        readonly cdrReport: OPTIONAL<CdrReport>,
        /**
         * @summary `sendStoredCDRs`.
         * @public
         * @readonly
         */
        readonly sendStoredCDRs: OPTIONAL<SendStoredCDRs>,
        /**
         * @summary `startCDRTransmission`.
         * @public
         * @readonly
         */
        readonly startCDRTransmission: OPTIONAL<StartCDRTransmission>,
        /**
         * @summary `stopCDRTransmission`.
         * @public
         * @readonly
         */
        readonly stopCDRTransmission: OPTIONAL<StopCDRTransmission>
    ) {}

    /**
     * @summary Restructures an object into a CDRServList
     * @description
     * 
     * This takes an `object` and converts it to a `CDRServList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CDRServList`.
     * @returns {CDRServList}
     */
    public static _from_object (_o: { [_K in keyof (CDRServList)]: (CDRServList)[_K] }): CDRServList {
        return new CDRServList(_o.cdrNotification, _o.cdrReport, _o.sendStoredCDRs, _o.startCDRTransmission, _o.stopCDRTransmission);
    }


}

/**
 * @summary The Leading Root Component Types of CDRServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CDRServList: $.ComponentSpec[] = [
    new $.ComponentSpec("cdrNotification", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("cdrReport", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sendStoredCDRs", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("startCDRTransmission", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("stopCDRTransmission", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of CDRServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CDRServList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CDRServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CDRServList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CDRServList: $.ASN1Decoder<CDRServList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CDRServList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CDRServList (el: _Element): CDRServList {
    if (!_cached_decoder_for_CDRServList) { _cached_decoder_for_CDRServList = function (el: _Element): CDRServList {
    let cdrNotification: OPTIONAL<CdrNotification>;
    let cdrReport: OPTIONAL<CdrReport>;
    let sendStoredCDRs: OPTIONAL<SendStoredCDRs>;
    let startCDRTransmission: OPTIONAL<StartCDRTransmission>;
    let stopCDRTransmission: OPTIONAL<StopCDRTransmission>;
    const callbacks: $.DecodingMap = {
        "cdrNotification": (_el: _Element): void => { cdrNotification = $._decode_implicit<CdrNotification>(() => _decode_CdrNotification)(_el); },
        "cdrReport": (_el: _Element): void => { cdrReport = $._decode_implicit<CdrReport>(() => _decode_CdrReport)(_el); },
        "sendStoredCDRs": (_el: _Element): void => { sendStoredCDRs = $._decode_implicit<SendStoredCDRs>(() => _decode_SendStoredCDRs)(_el); },
        "startCDRTransmission": (_el: _Element): void => { startCDRTransmission = $._decode_implicit<StartCDRTransmission>(() => _decode_StartCDRTransmission)(_el); },
        "stopCDRTransmission": (_el: _Element): void => { stopCDRTransmission = $._decode_implicit<StopCDRTransmission>(() => _decode_StopCDRTransmission)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CDRServList,
        _extension_additions_list_spec_for_CDRServList,
        _root_component_type_list_2_spec_for_CDRServList,
        undefined,
    );
    return new CDRServList(
        cdrNotification,
        cdrReport,
        sendStoredCDRs,
        startCDRTransmission,
        stopCDRTransmission
    );
}; }
    return _cached_decoder_for_CDRServList(el);
}

let _cached_encoder_for_CDRServList: $.ASN1Encoder<CDRServList> | null = null;

/**
 * @summary Encodes a(n) CDRServList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CDRServList, encoded as an ASN.1 Element.
 */
export
function _encode_CDRServList (value: CDRServList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CDRServList) { _cached_encoder_for_CDRServList = function (value: CDRServList, elGetter: $.ASN1Encoder<CDRServList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.cdrNotification === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CdrNotification, $.BER)(value.cdrNotification, $.BER)),
            /* IF_ABSENT  */ ((value.cdrReport === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CdrReport, $.BER)(value.cdrReport, $.BER)),
            /* IF_ABSENT  */ ((value.sendStoredCDRs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_SendStoredCDRs, $.BER)(value.sendStoredCDRs, $.BER)),
            /* IF_ABSENT  */ ((value.startCDRTransmission === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_StartCDRTransmission, $.BER)(value.startCDRTransmission, $.BER)),
            /* IF_ABSENT  */ ((value.stopCDRTransmission === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_StopCDRTransmission, $.BER)(value.stopCDRTransmission, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CDRServList(value, elGetter);
}


/* eslint-enable */

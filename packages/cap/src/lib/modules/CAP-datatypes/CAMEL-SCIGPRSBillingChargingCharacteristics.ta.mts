import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AOCGPRS, _decode_AOCGPRS, _encode_AOCGPRS } from "./AOCGPRS.ta.mjs";
import { type PDPID, _decode_PDPID, _encode_PDPID } from "./PDPID.ta.mjs";

/**
 * @summary CAMEL_SCIGPRSBillingChargingCharacteristics
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CAMEL-SCIGPRSBillingChargingCharacteristics ::= SEQUENCE {
 *  aOCGPRS				[0] AOCGPRS,
 *  pDPID				[1] PDPID					OPTIONAL,
 *  ...
 *  }
 * ```
 *
 */
export class CAMEL_SCIGPRSBillingChargingCharacteristics {
    constructor (
        readonly aOCGPRS: AOCGPRS,
        readonly pDPID: OPTIONAL<PDPID>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (CAMEL_SCIGPRSBillingChargingCharacteristics)]: (CAMEL_SCIGPRSBillingChargingCharacteristics)[_K] }): CAMEL_SCIGPRSBillingChargingCharacteristics {
        return new CAMEL_SCIGPRSBillingChargingCharacteristics(_o.aOCGPRS, _o.pDPID, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_CAMEL_SCIGPRSBillingChargingCharacteristics: $.ComponentSpec[] = [
    new $.ComponentSpec("aOCGPRS", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("pDPID", true, $.hasTag(_TagClass.context, 1))
];

export const _root_component_type_list_2_spec_for_CAMEL_SCIGPRSBillingChargingCharacteristics: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_CAMEL_SCIGPRSBillingChargingCharacteristics: $.ComponentSpec[] = [];

let _cached_decoder_for_CAMEL_SCIGPRSBillingChargingCharacteristics: $.ASN1Decoder<CAMEL_SCIGPRSBillingChargingCharacteristics> | null = null;
export function _decode_CAMEL_SCIGPRSBillingChargingCharacteristics (el: _Element): CAMEL_SCIGPRSBillingChargingCharacteristics {
    if (!_cached_decoder_for_CAMEL_SCIGPRSBillingChargingCharacteristics) {
        _cached_decoder_for_CAMEL_SCIGPRSBillingChargingCharacteristics = function (el: _Element): CAMEL_SCIGPRSBillingChargingCharacteristics {
    let aOCGPRS!: AOCGPRS;
    let pDPID: OPTIONAL<PDPID>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "aOCGPRS": (_el: _Element): void => { aOCGPRS = $._decode_implicit<AOCGPRS>(() => _decode_AOCGPRS)(_el); },
        "pDPID": (_el: _Element): void => { pDPID = $._decode_implicit<PDPID>(() => _decode_PDPID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CAMEL_SCIGPRSBillingChargingCharacteristics,
        _extension_additions_list_spec_for_CAMEL_SCIGPRSBillingChargingCharacteristics,
        _root_component_type_list_2_spec_for_CAMEL_SCIGPRSBillingChargingCharacteristics,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CAMEL_SCIGPRSBillingChargingCharacteristics(
        aOCGPRS,
        pDPID,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_CAMEL_SCIGPRSBillingChargingCharacteristics(el);
}

let _cached_encoder_for_CAMEL_SCIGPRSBillingChargingCharacteristics: $.ASN1Encoder<CAMEL_SCIGPRSBillingChargingCharacteristics> | null = null;
export function _encode_CAMEL_SCIGPRSBillingChargingCharacteristics (value: CAMEL_SCIGPRSBillingChargingCharacteristics, elGetter: $.ASN1Encoder<CAMEL_SCIGPRSBillingChargingCharacteristics>): _Element {
    if (!_cached_encoder_for_CAMEL_SCIGPRSBillingChargingCharacteristics) {
        _cached_encoder_for_CAMEL_SCIGPRSBillingChargingCharacteristics = function (value: CAMEL_SCIGPRSBillingChargingCharacteristics): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_AOCGPRS, $.BER)(value.aOCGPRS, $.BER),
            /* IF_ABSENT  */ ((value.pDPID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_PDPID, $.BER)(value.pDPID, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_CAMEL_SCIGPRSBillingChargingCharacteristics(value, elGetter);
}

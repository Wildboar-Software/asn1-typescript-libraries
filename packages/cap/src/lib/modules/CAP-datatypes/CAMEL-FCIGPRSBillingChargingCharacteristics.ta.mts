import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1, _decode_CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1, _encode_CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1 } from "./CAMEL-FCIGPRSBillingChargingCharacteristics-fCIBCCCAMELsequence1.ta.mjs";

/**
 * @summary CAMEL_FCIGPRSBillingChargingCharacteristics
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CAMEL-FCIGPRSBillingChargingCharacteristics {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 fCIBCCCAMELsequence1		[0] SEQUENCE {
 freeFormatData			[0] OCTET STRING (SIZE(
 bound.&minFCIBillingChargingDataLength .. bound.&maxFCIBillingChargingDataLength)),
 pDPID				[1] PDPID OPTIONAL,
 appendFreeFormatData		[2] AppendFreeFormatData DEFAULT overwrite,
 ...
 }
 }
 * ```
 *
 */
export class CAMEL_FCIGPRSBillingChargingCharacteristics {
    constructor (
        readonly fCIBCCCAMELsequence1: CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (CAMEL_FCIGPRSBillingChargingCharacteristics)]: (CAMEL_FCIGPRSBillingChargingCharacteristics)[_K] }): CAMEL_FCIGPRSBillingChargingCharacteristics {
        return new CAMEL_FCIGPRSBillingChargingCharacteristics(_o.fCIBCCCAMELsequence1, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_CAMEL_FCIGPRSBillingChargingCharacteristics: $.ComponentSpec[] = [
    new $.ComponentSpec("fCIBCCCAMELsequence1", false, $.hasTag(_TagClass.context, 0))
];

export const _root_component_type_list_2_spec_for_CAMEL_FCIGPRSBillingChargingCharacteristics: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_CAMEL_FCIGPRSBillingChargingCharacteristics: $.ComponentSpec[] = [];

let _cached_decoder_for_CAMEL_FCIGPRSBillingChargingCharacteristics: $.ASN1Decoder<CAMEL_FCIGPRSBillingChargingCharacteristics> | null = null;
export function _decode_CAMEL_FCIGPRSBillingChargingCharacteristics (el: _Element): CAMEL_FCIGPRSBillingChargingCharacteristics {
    if (!_cached_decoder_for_CAMEL_FCIGPRSBillingChargingCharacteristics) {
        _cached_decoder_for_CAMEL_FCIGPRSBillingChargingCharacteristics = function (el: _Element): CAMEL_FCIGPRSBillingChargingCharacteristics {
    let fCIBCCCAMELsequence1!: CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "fCIBCCCAMELsequence1": (_el: _Element): void => { fCIBCCCAMELsequence1 = $._decode_implicit<CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1>(() => _decode_CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CAMEL_FCIGPRSBillingChargingCharacteristics,
        _extension_additions_list_spec_for_CAMEL_FCIGPRSBillingChargingCharacteristics,
        _root_component_type_list_2_spec_for_CAMEL_FCIGPRSBillingChargingCharacteristics,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CAMEL_FCIGPRSBillingChargingCharacteristics(
        fCIBCCCAMELsequence1,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_CAMEL_FCIGPRSBillingChargingCharacteristics(el);
}

let _cached_encoder_for_CAMEL_FCIGPRSBillingChargingCharacteristics: $.ASN1Encoder<CAMEL_FCIGPRSBillingChargingCharacteristics> | null = null;
export function _encode_CAMEL_FCIGPRSBillingChargingCharacteristics (value: CAMEL_FCIGPRSBillingChargingCharacteristics, elGetter: $.ASN1Encoder<CAMEL_FCIGPRSBillingChargingCharacteristics>): _Element {
    if (!_cached_encoder_for_CAMEL_FCIGPRSBillingChargingCharacteristics) {
        _cached_encoder_for_CAMEL_FCIGPRSBillingChargingCharacteristics = function (value: CAMEL_FCIGPRSBillingChargingCharacteristics): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1, $.BER)(value.fCIBCCCAMELsequence1, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_CAMEL_FCIGPRSBillingChargingCharacteristics(value, elGetter);
}

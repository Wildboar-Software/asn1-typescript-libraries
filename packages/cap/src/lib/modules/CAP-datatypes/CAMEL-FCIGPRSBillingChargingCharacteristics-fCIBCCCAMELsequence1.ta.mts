import {
    OPTIONAL,
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type PDPID, _decode_PDPID, _encode_PDPID } from "./PDPID.ta.mjs";
import { AppendFreeFormatData, _enum_for_AppendFreeFormatData, overwrite, _decode_AppendFreeFormatData, _encode_AppendFreeFormatData } from "./AppendFreeFormatData.ta.mjs";

/**
 * @summary CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CAMEL-FCIGPRSBillingChargingCharacteristics-fCIBCCCAMELsequence1 {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *  freeFormatData			[0] OCTET STRING (SIZE(
 *  bound.&minFCIBillingChargingDataLength .. bound.&maxFCIBillingChargingDataLength)),
 *  pDPID				[1] PDPID OPTIONAL,
 *  appendFreeFormatData		[2] AppendFreeFormatData DEFAULT overwrite,
 *  ...
 *  }
 * ```
 *
 */
export class CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1 {
    constructor (
        /**
         * @summary `freeFormatData`.
         * @description
         *
         * Free-format billing and/or charging characteristics.
         * (3GPP TS 29.078 V19.0.0 clause 13.9).
         *
         * @public
         * @readonly
         */
        readonly freeFormatData: OCTET_STRING,
        /**
         * @summary `pDPID`.
         * @description
         *
         * PDP Context Logical GPRS record to which the free format data
         * belongs. (3GPP TS 29.078 V19.0.0 clause 13.9).
         *
         * @public
         * @readonly
         */
        readonly pDPID: OPTIONAL<PDPID>,
        /**
         * @summary `appendFreeFormatData`.
         * @description
         *
         * Whether previous FCI free format data is appended or overwritten.
         * Default `overwrite`. Refer to 3GPP TS 23.078.
         * (3GPP TS 29.078 V19.0.0 clause 13.9).
         *
         * @public
         * @readonly
         */
        readonly appendFreeFormatData: OPTIONAL<AppendFreeFormatData>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1)]: (CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1)[_K] }): CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1 {
        return new CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1(_o.freeFormatData, _o.pDPID, _o.appendFreeFormatData, _o._unrecognizedExtensionsList);
    }

    public static get _default_value_for_appendFreeFormatData () { return overwrite; }

    public static _enum_for_appendFreeFormatData = _enum_for_AppendFreeFormatData;
}

export const _root_component_type_list_1_spec_for_CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1: $.ComponentSpec[] = [
    new $.ComponentSpec("freeFormatData", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("pDPID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("appendFreeFormatData", true, $.hasTag(_TagClass.context, 2))
];

export const _root_component_type_list_2_spec_for_CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1: $.ComponentSpec[] = [];

let _cached_decoder_for_CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1: $.ASN1Decoder<CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1> | null = null;
export function _decode_CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1 (el: _Element): CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1 {
    if (!_cached_decoder_for_CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1) {
        _cached_decoder_for_CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1 = function (el: _Element): CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1 {
    let freeFormatData!: OCTET_STRING;
    let pDPID: OPTIONAL<PDPID>;
    let appendFreeFormatData: OPTIONAL<AppendFreeFormatData> = CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1._default_value_for_appendFreeFormatData;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "freeFormatData": (_el: _Element): void => { freeFormatData = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "pDPID": (_el: _Element): void => { pDPID = $._decode_implicit<PDPID>(() => _decode_PDPID)(_el); },
        "appendFreeFormatData": (_el: _Element): void => { appendFreeFormatData = $._decode_implicit<AppendFreeFormatData>(() => _decode_AppendFreeFormatData)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1,
        _extension_additions_list_spec_for_CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1,
        _root_component_type_list_2_spec_for_CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1(
        freeFormatData,
        pDPID,
        appendFreeFormatData,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1(el);
}

let _cached_encoder_for_CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1: $.ASN1Encoder<CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1> | null = null;
export function _encode_CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1 (value: CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1, elGetter: $.ASN1Encoder<CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1>): _Element {
    if (!_cached_encoder_for_CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1) {
        _cached_encoder_for_CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1 = function (value: CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.freeFormatData, $.BER),
            /* IF_ABSENT  */ ((value.pDPID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_PDPID, $.BER)(value.pDPID, $.BER)),
            /* IF_DEFAULT */ (value.appendFreeFormatData === undefined || $.deepEq(value.appendFreeFormatData, CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1._default_value_for_appendFreeFormatData) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_AppendFreeFormatData, $.BER)(value.appendFreeFormatData, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_CAMEL_FCIGPRSBillingChargingCharacteristics_fCIBCCCAMELsequence1(value, elGetter);
}

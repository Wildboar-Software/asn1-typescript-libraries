import {
    OPTIONAL,
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { leg1 } from "../Core-INAP-CS1-DataTypes/leg1.va.mjs";
import { type SendingSideID, _decode_SendingSideID, _encode_SendingSideID } from "./SendingSideID.ta.mjs";
import { AppendFreeFormatData, _enum_for_AppendFreeFormatData, overwrite, _decode_AppendFreeFormatData, _encode_AppendFreeFormatData } from "./AppendFreeFormatData.ta.mjs";

/**
 * @summary CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEQUENCE {
 freeFormatData			[0] OCTET STRING (SIZE(
 bound.&minFCIBillingChargingDataLength .. bound.&maxFCIBillingChargingDataLength)),
 partyToCharge			[1] SendingSideID DEFAULT sendingSideID: leg1,
 appendFreeFormatData		[2] AppendFreeFormatData DEFAULT overwrite,
 ...
 }
 * ```
 *
 */
export class CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1 {
    constructor (
        readonly freeFormatData: OCTET_STRING,
        readonly partyToCharge: OPTIONAL<SendingSideID>,
        readonly appendFreeFormatData: OPTIONAL<AppendFreeFormatData>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1)]: (CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1)[_K] }): CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1 {
        return new CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1(_o.freeFormatData, _o.partyToCharge, _o.appendFreeFormatData, _o._unrecognizedExtensionsList);
    }

    public static get _default_value_for_partyToCharge () { return { sendingSideID: leg1 }; }
    public static get _default_value_for_appendFreeFormatData () { return overwrite; }

    public static _enum_for_appendFreeFormatData = _enum_for_AppendFreeFormatData;
}

export const _root_component_type_list_1_spec_for_CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1: $.ComponentSpec[] = [
    new $.ComponentSpec("freeFormatData", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("partyToCharge", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("appendFreeFormatData", true, $.hasTag(_TagClass.context, 2))
];

export const _root_component_type_list_2_spec_for_CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1: $.ComponentSpec[] = [];

let _cached_decoder_for_CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1: $.ASN1Decoder<CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1> | null = null;
export function _decode_CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1 (el: _Element): CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1 {
    if (!_cached_decoder_for_CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1) {
        _cached_decoder_for_CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1 = function (el: _Element): CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1 {
    let freeFormatData!: OCTET_STRING;
    let partyToCharge: OPTIONAL<SendingSideID> = CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1._default_value_for_partyToCharge;
    let appendFreeFormatData: OPTIONAL<AppendFreeFormatData> = CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1._default_value_for_appendFreeFormatData;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "freeFormatData": (_el: _Element): void => { freeFormatData = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "partyToCharge": (_el: _Element): void => { partyToCharge = $._decode_explicit<SendingSideID>(() => _decode_SendingSideID)(_el); },
        "appendFreeFormatData": (_el: _Element): void => { appendFreeFormatData = $._decode_implicit<AppendFreeFormatData>(() => _decode_AppendFreeFormatData)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1,
        _extension_additions_list_spec_for_CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1,
        _root_component_type_list_2_spec_for_CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1(
        freeFormatData,
        partyToCharge,
        appendFreeFormatData,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1(el);
}

let _cached_encoder_for_CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1: $.ASN1Encoder<CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1> | null = null;
export function _encode_CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1 (value: CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1, elGetter: $.ASN1Encoder<CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1>): _Element {
    if (!_cached_encoder_for_CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1) {
        _cached_encoder_for_CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1 = function (value: CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.freeFormatData, $.BER),
            /* IF_DEFAULT */ (value.partyToCharge === undefined || $.deepEq(value.partyToCharge, CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1._default_value_for_partyToCharge) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_SendingSideID, $.BER)(value.partyToCharge, $.BER)),
            /* IF_DEFAULT */ (value.appendFreeFormatData === undefined || $.deepEq(value.appendFreeFormatData, CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1._default_value_for_appendFreeFormatData) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_AppendFreeFormatData, $.BER)(value.appendFreeFormatData, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1(value, elGetter);
}

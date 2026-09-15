import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DpSpecificInfoAlt_oServiceChangeSpecificInfo, _decode_DpSpecificInfoAlt_oServiceChangeSpecificInfo, _encode_DpSpecificInfoAlt_oServiceChangeSpecificInfo } from "./DpSpecificInfoAlt-oServiceChangeSpecificInfo.ta.mjs";
import { DpSpecificInfoAlt_tServiceChangeSpecificInfo, _decode_DpSpecificInfoAlt_tServiceChangeSpecificInfo, _encode_DpSpecificInfoAlt_tServiceChangeSpecificInfo } from "./DpSpecificInfoAlt-tServiceChangeSpecificInfo.ta.mjs";
import { DpSpecificInfoAlt_collectedInfoSpecificInfo, _decode_DpSpecificInfoAlt_collectedInfoSpecificInfo, _encode_DpSpecificInfoAlt_collectedInfoSpecificInfo } from "./DpSpecificInfoAlt-collectedInfoSpecificInfo.ta.mjs";

/**
 * @summary DpSpecificInfoAlt
 * @description
 *
 * Reserved for extension in future releases. Currently carries o/t
 * service-change info (SCUDIF) and collected-info `calledPartyNumber`.
 * (3GPP TS 29.078 V19.0.0 clause 5.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DpSpecificInfoAlt {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *  ...,
 *  oServiceChangeSpecificInfo		[0] SEQUENCE {
 *  ext-basicServiceCode		[0] Ext-BasicServiceCode		OPTIONAL,
 *  ...,
 *  initiatorOfServiceChange		[1] InitiatorOfServiceChange		OPTIONAL,
 *  natureOfServiceChange		[2] NatureOfServiceChange		OPTIONAL
 *  
 *  }
 *  tServiceChangeSpecificInfo		[1] SEQUENCE {
 *  ext-basicServiceCode		[0] Ext-BasicServiceCode		OPTIONAL,
 *  ...,
 *  initiatorOfServiceChange		[1] InitiatorOfServiceChange		OPTIONAL,
 *  natureOfServiceChange		[2] NatureOfServiceChange		OPTIONAL
 *  }
 *  
 *  collectedInfoSpecificInfo		[2]	SEQUENCE {
 *  calledPartyNumber			[0]	CalledPartyNumber			OPTIONAL,
 *  ...
 *  }
 *  }
 * ```
 *
 */
export class DpSpecificInfoAlt {
    constructor (
        readonly oServiceChangeSpecificInfo: DpSpecificInfoAlt_oServiceChangeSpecificInfo,
        readonly tServiceChangeSpecificInfo: DpSpecificInfoAlt_tServiceChangeSpecificInfo,
        readonly collectedInfoSpecificInfo: DpSpecificInfoAlt_collectedInfoSpecificInfo,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (DpSpecificInfoAlt)]: (DpSpecificInfoAlt)[_K] }): DpSpecificInfoAlt {
        return new DpSpecificInfoAlt(_o.oServiceChangeSpecificInfo, _o.tServiceChangeSpecificInfo, _o.collectedInfoSpecificInfo, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_DpSpecificInfoAlt: $.ComponentSpec[] = [];

export const _root_component_type_list_2_spec_for_DpSpecificInfoAlt: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_DpSpecificInfoAlt: $.ComponentSpec[] = [
    new $.ComponentSpec("oServiceChangeSpecificInfo", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("tServiceChangeSpecificInfo", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("collectedInfoSpecificInfo", false, $.hasTag(_TagClass.context, 2))
];

let _cached_decoder_for_DpSpecificInfoAlt: $.ASN1Decoder<DpSpecificInfoAlt> | null = null;
export function _decode_DpSpecificInfoAlt (el: _Element): DpSpecificInfoAlt {
    if (!_cached_decoder_for_DpSpecificInfoAlt) {
        _cached_decoder_for_DpSpecificInfoAlt = function (el: _Element): DpSpecificInfoAlt {
    let oServiceChangeSpecificInfo!: DpSpecificInfoAlt_oServiceChangeSpecificInfo;
    let tServiceChangeSpecificInfo!: DpSpecificInfoAlt_tServiceChangeSpecificInfo;
    let collectedInfoSpecificInfo!: DpSpecificInfoAlt_collectedInfoSpecificInfo;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "oServiceChangeSpecificInfo": (_el: _Element): void => { oServiceChangeSpecificInfo = $._decode_implicit<DpSpecificInfoAlt_oServiceChangeSpecificInfo>(() => _decode_DpSpecificInfoAlt_oServiceChangeSpecificInfo)(_el); },
        "tServiceChangeSpecificInfo": (_el: _Element): void => { tServiceChangeSpecificInfo = $._decode_implicit<DpSpecificInfoAlt_tServiceChangeSpecificInfo>(() => _decode_DpSpecificInfoAlt_tServiceChangeSpecificInfo)(_el); },
        "collectedInfoSpecificInfo": (_el: _Element): void => { collectedInfoSpecificInfo = $._decode_implicit<DpSpecificInfoAlt_collectedInfoSpecificInfo>(() => _decode_DpSpecificInfoAlt_collectedInfoSpecificInfo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DpSpecificInfoAlt,
        _extension_additions_list_spec_for_DpSpecificInfoAlt,
        _root_component_type_list_2_spec_for_DpSpecificInfoAlt,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new DpSpecificInfoAlt(
        oServiceChangeSpecificInfo,
        tServiceChangeSpecificInfo,
        collectedInfoSpecificInfo,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_DpSpecificInfoAlt(el);
}

let _cached_encoder_for_DpSpecificInfoAlt: $.ASN1Encoder<DpSpecificInfoAlt> | null = null;
export function _encode_DpSpecificInfoAlt (value: DpSpecificInfoAlt, elGetter: $.ASN1Encoder<DpSpecificInfoAlt>): _Element {
    if (!_cached_encoder_for_DpSpecificInfoAlt) {
        _cached_encoder_for_DpSpecificInfoAlt = function (value: DpSpecificInfoAlt): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_DpSpecificInfoAlt_oServiceChangeSpecificInfo, $.BER)(value.oServiceChangeSpecificInfo, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_DpSpecificInfoAlt_tServiceChangeSpecificInfo, $.BER)(value.tServiceChangeSpecificInfo, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_DpSpecificInfoAlt_collectedInfoSpecificInfo, $.BER)(value.collectedInfoSpecificInfo, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_DpSpecificInfoAlt(value, elGetter);
}

import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary CAMEL_SCIBillingChargingCharacteristicsAlt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CAMEL-SCIBillingChargingCharacteristicsAlt ::= SEQUENCE {
 *  ...
 *  }
 * ```
 *
 */
export class CAMEL_SCIBillingChargingCharacteristicsAlt {
    constructor (
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (CAMEL_SCIBillingChargingCharacteristicsAlt)]: (CAMEL_SCIBillingChargingCharacteristicsAlt)[_K] }): CAMEL_SCIBillingChargingCharacteristicsAlt {
        return new CAMEL_SCIBillingChargingCharacteristicsAlt(_o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_CAMEL_SCIBillingChargingCharacteristicsAlt: $.ComponentSpec[] = [];

export const _root_component_type_list_2_spec_for_CAMEL_SCIBillingChargingCharacteristicsAlt: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_CAMEL_SCIBillingChargingCharacteristicsAlt: $.ComponentSpec[] = [];

let _cached_decoder_for_CAMEL_SCIBillingChargingCharacteristicsAlt: $.ASN1Decoder<CAMEL_SCIBillingChargingCharacteristicsAlt> | null = null;
export function _decode_CAMEL_SCIBillingChargingCharacteristicsAlt (el: _Element): CAMEL_SCIBillingChargingCharacteristicsAlt {
    if (!_cached_decoder_for_CAMEL_SCIBillingChargingCharacteristicsAlt) {
        _cached_decoder_for_CAMEL_SCIBillingChargingCharacteristicsAlt = function (el: _Element): CAMEL_SCIBillingChargingCharacteristicsAlt {
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {

    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CAMEL_SCIBillingChargingCharacteristicsAlt,
        _extension_additions_list_spec_for_CAMEL_SCIBillingChargingCharacteristicsAlt,
        _root_component_type_list_2_spec_for_CAMEL_SCIBillingChargingCharacteristicsAlt,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CAMEL_SCIBillingChargingCharacteristicsAlt(_unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_CAMEL_SCIBillingChargingCharacteristicsAlt(el);
}

let _cached_encoder_for_CAMEL_SCIBillingChargingCharacteristicsAlt: $.ASN1Encoder<CAMEL_SCIBillingChargingCharacteristicsAlt> | null = null;
export function _encode_CAMEL_SCIBillingChargingCharacteristicsAlt (value: CAMEL_SCIBillingChargingCharacteristicsAlt, elGetter: $.ASN1Encoder<CAMEL_SCIBillingChargingCharacteristicsAlt>): _Element {
    if (!_cached_encoder_for_CAMEL_SCIBillingChargingCharacteristicsAlt) {
        _cached_encoder_for_CAMEL_SCIBillingChargingCharacteristicsAlt = function (value: CAMEL_SCIBillingChargingCharacteristicsAlt): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [

        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_CAMEL_SCIBillingChargingCharacteristicsAlt(value, elGetter);
}

import {
    OPTIONAL,
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary EndUserAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EndUserAddress {PARAMETERS-BOUND: bound} ::= SEQUENCE {
 pDPTypeOrganization			[0] OCTET STRING (SIZE(1)),
 pDPTypeNumber			[1] OCTET STRING (SIZE(1)),
 pDPAddress				[2] OCTET STRING (SIZE(
 bound.&minPDPAddressLength .. bound.&maxPDPAddressLength))			OPTIONAL
 }
 * ```
 *
 */
export class EndUserAddress {
    constructor (
        readonly pDPTypeOrganization: OCTET_STRING,
        readonly pDPTypeNumber: OCTET_STRING,
        readonly pDPAddress: OPTIONAL<OCTET_STRING>,
    ) {}

    public static _from_object (_o: { [_K in keyof (EndUserAddress)]: (EndUserAddress)[_K] }): EndUserAddress {
        return new EndUserAddress(_o.pDPTypeOrganization, _o.pDPTypeNumber, _o.pDPAddress);
    }
}

export const _root_component_type_list_1_spec_for_EndUserAddress: $.ComponentSpec[] = [
    new $.ComponentSpec("pDPTypeOrganization", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("pDPTypeNumber", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pDPAddress", true, $.hasTag(_TagClass.context, 2))
];

export const _root_component_type_list_2_spec_for_EndUserAddress: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_EndUserAddress: $.ComponentSpec[] = [];

let _cached_decoder_for_EndUserAddress: $.ASN1Decoder<EndUserAddress> | null = null;
export function _decode_EndUserAddress (el: _Element): EndUserAddress {
    if (!_cached_decoder_for_EndUserAddress) {
        _cached_decoder_for_EndUserAddress = function (el: _Element): EndUserAddress {
    let pDPTypeOrganization!: OCTET_STRING;
    let pDPTypeNumber!: OCTET_STRING;
    let pDPAddress: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "pDPTypeOrganization": (_el: _Element): void => { pDPTypeOrganization = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "pDPTypeNumber": (_el: _Element): void => { pDPTypeNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "pDPAddress": (_el: _Element): void => { pDPAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EndUserAddress,
        _extension_additions_list_spec_for_EndUserAddress,
        _root_component_type_list_2_spec_for_EndUserAddress,
        undefined,
    );
    return new EndUserAddress(
        pDPTypeOrganization,
        pDPTypeNumber,
        pDPAddress
    );
        };
    }
    return _cached_decoder_for_EndUserAddress(el);
}

let _cached_encoder_for_EndUserAddress: $.ASN1Encoder<EndUserAddress> | null = null;
export function _encode_EndUserAddress (value: EndUserAddress, elGetter: $.ASN1Encoder<EndUserAddress>): _Element {
    if (!_cached_encoder_for_EndUserAddress) {
        _cached_encoder_for_EndUserAddress = function (value: EndUserAddress): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.pDPTypeOrganization, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.pDPTypeNumber, $.BER),
            /* IF_ABSENT  */ ((value.pDPAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.pDPAddress, $.BER))
        ]
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_EndUserAddress(value, elGetter);
}

import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LocationInformationGPRS, _decode_LocationInformationGPRS, _encode_LocationInformationGPRS } from "./LocationInformationGPRS.ta.mjs";

/**
 * @summary GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEQUENCE {
 locationInformationGPRS		[0] LocationInformationGPRS		OPTIONAL,
 ...
 }
 * ```
 *
 */
export class GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation {
    constructor (
        readonly locationInformationGPRS: OPTIONAL<LocationInformationGPRS>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation)]: (GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation)[_K] }): GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation {
        return new GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation(_o.locationInformationGPRS, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("locationInformationGPRS", true, $.hasTag(_TagClass.context, 0))
];

export const _root_component_type_list_2_spec_for_GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation: $.ComponentSpec[] = [];

let _cached_decoder_for_GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation: $.ASN1Decoder<GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation> | null = null;
export function _decode_GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation (el: _Element): GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation {
    if (!_cached_decoder_for_GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation) {
        _cached_decoder_for_GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation = function (el: _Element): GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation {
    let locationInformationGPRS: OPTIONAL<LocationInformationGPRS>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "locationInformationGPRS": (_el: _Element): void => { locationInformationGPRS = $._decode_implicit<LocationInformationGPRS>(() => _decode_LocationInformationGPRS)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation,
        _extension_additions_list_spec_for_GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation,
        _root_component_type_list_2_spec_for_GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation(
        locationInformationGPRS,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation(el);
}

let _cached_encoder_for_GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation: $.ASN1Encoder<GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation> | null = null;
export function _encode_GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation (value: GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation, elGetter: $.ASN1Encoder<GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation>): _Element {
    if (!_cached_encoder_for_GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation) {
        _cached_encoder_for_GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation = function (value: GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation, elGetter: $.ASN1Encoder<GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.locationInformationGPRS === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_LocationInformationGPRS, $.BER)(value.locationInformationGPRS, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation(value, elGetter);
}

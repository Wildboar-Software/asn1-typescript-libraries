import {
    OPTIONAL,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InitiatingEntity, _enum_for_InitiatingEntity, _decode_InitiatingEntity, _encode_InitiatingEntity } from "./InitiatingEntity.ta.mjs";

/**
 * @summary GPRSEventSpecificInformation_disconnectSpecificInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEQUENCE {
 initiatingEntity		[0] InitiatingEntity			OPTIONAL,
 ...,
 routeingAreaUpdate		[1]	NULL				OPTIONAL
 }
 * ```
 *
 */
export class GPRSEventSpecificInformation_disconnectSpecificInformation {
    constructor (
        readonly initiatingEntity: OPTIONAL<InitiatingEntity>,
        readonly routeingAreaUpdate: OPTIONAL<NULL>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (GPRSEventSpecificInformation_disconnectSpecificInformation)]: (GPRSEventSpecificInformation_disconnectSpecificInformation)[_K] }): GPRSEventSpecificInformation_disconnectSpecificInformation {
        return new GPRSEventSpecificInformation_disconnectSpecificInformation(_o.initiatingEntity, _o.routeingAreaUpdate, _o._unrecognizedExtensionsList);
    }

    public static _enum_for_initiatingEntity = _enum_for_InitiatingEntity;
}

export const _root_component_type_list_1_spec_for_GPRSEventSpecificInformation_disconnectSpecificInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("initiatingEntity", true, $.hasTag(_TagClass.context, 0))
];

export const _root_component_type_list_2_spec_for_GPRSEventSpecificInformation_disconnectSpecificInformation: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_GPRSEventSpecificInformation_disconnectSpecificInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("routeingAreaUpdate", true, $.hasTag(_TagClass.context, 1))
];

let _cached_decoder_for_GPRSEventSpecificInformation_disconnectSpecificInformation: $.ASN1Decoder<GPRSEventSpecificInformation_disconnectSpecificInformation> | null = null;
export function _decode_GPRSEventSpecificInformation_disconnectSpecificInformation (el: _Element): GPRSEventSpecificInformation_disconnectSpecificInformation {
    if (!_cached_decoder_for_GPRSEventSpecificInformation_disconnectSpecificInformation) {
        _cached_decoder_for_GPRSEventSpecificInformation_disconnectSpecificInformation = function (el: _Element): GPRSEventSpecificInformation_disconnectSpecificInformation {
    let initiatingEntity: OPTIONAL<InitiatingEntity>;
    let routeingAreaUpdate: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "initiatingEntity": (_el: _Element): void => { initiatingEntity = $._decode_implicit<InitiatingEntity>(() => _decode_InitiatingEntity)(_el); },
        "routeingAreaUpdate": (_el: _Element): void => { routeingAreaUpdate = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GPRSEventSpecificInformation_disconnectSpecificInformation,
        _extension_additions_list_spec_for_GPRSEventSpecificInformation_disconnectSpecificInformation,
        _root_component_type_list_2_spec_for_GPRSEventSpecificInformation_disconnectSpecificInformation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new GPRSEventSpecificInformation_disconnectSpecificInformation(
        initiatingEntity,
        routeingAreaUpdate,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_GPRSEventSpecificInformation_disconnectSpecificInformation(el);
}

let _cached_encoder_for_GPRSEventSpecificInformation_disconnectSpecificInformation: $.ASN1Encoder<GPRSEventSpecificInformation_disconnectSpecificInformation> | null = null;
export function _encode_GPRSEventSpecificInformation_disconnectSpecificInformation (value: GPRSEventSpecificInformation_disconnectSpecificInformation, elGetter: $.ASN1Encoder<GPRSEventSpecificInformation_disconnectSpecificInformation>): _Element {
    if (!_cached_encoder_for_GPRSEventSpecificInformation_disconnectSpecificInformation) {
        _cached_encoder_for_GPRSEventSpecificInformation_disconnectSpecificInformation = function (value: GPRSEventSpecificInformation_disconnectSpecificInformation): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.initiatingEntity === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_InitiatingEntity, $.BER)(value.initiatingEntity, $.BER)),
            /* IF_ABSENT  */ ((value.routeingAreaUpdate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.routeingAreaUpdate, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_GPRSEventSpecificInformation_disconnectSpecificInformation(value, elGetter);
}

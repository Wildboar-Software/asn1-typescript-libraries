import {
    OPTIONAL,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InitiatingEntity, _enum_for_InitiatingEntity, _decode_InitiatingEntity, _encode_InitiatingEntity } from "./InitiatingEntity.ta.mjs";

/**
 * @summary GPRSEventSpecificInformation_detachSpecificInformation
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
export class GPRSEventSpecificInformation_detachSpecificInformation {
    constructor (
        readonly initiatingEntity: OPTIONAL<InitiatingEntity>,
        readonly routeingAreaUpdate: OPTIONAL<NULL>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (GPRSEventSpecificInformation_detachSpecificInformation)]: (GPRSEventSpecificInformation_detachSpecificInformation)[_K] }): GPRSEventSpecificInformation_detachSpecificInformation {
        return new GPRSEventSpecificInformation_detachSpecificInformation(_o.initiatingEntity, _o.routeingAreaUpdate, _o._unrecognizedExtensionsList);
    }

    public static _enum_for_initiatingEntity = _enum_for_InitiatingEntity;
}

export const _root_component_type_list_1_spec_for_GPRSEventSpecificInformation_detachSpecificInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("initiatingEntity", true, $.hasTag(_TagClass.context, 0))
];

export const _root_component_type_list_2_spec_for_GPRSEventSpecificInformation_detachSpecificInformation: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_GPRSEventSpecificInformation_detachSpecificInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("routeingAreaUpdate", true, $.hasTag(_TagClass.context, 1))
];

let _cached_decoder_for_GPRSEventSpecificInformation_detachSpecificInformation: $.ASN1Decoder<GPRSEventSpecificInformation_detachSpecificInformation> | null = null;
export function _decode_GPRSEventSpecificInformation_detachSpecificInformation (el: _Element): GPRSEventSpecificInformation_detachSpecificInformation {
    if (!_cached_decoder_for_GPRSEventSpecificInformation_detachSpecificInformation) {
        _cached_decoder_for_GPRSEventSpecificInformation_detachSpecificInformation = function (el: _Element): GPRSEventSpecificInformation_detachSpecificInformation {
    let initiatingEntity: OPTIONAL<InitiatingEntity>;
    let routeingAreaUpdate: OPTIONAL<NULL>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "initiatingEntity": (_el: _Element): void => { initiatingEntity = $._decode_implicit<InitiatingEntity>(() => _decode_InitiatingEntity)(_el); },
        "routeingAreaUpdate": (_el: _Element): void => { routeingAreaUpdate = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GPRSEventSpecificInformation_detachSpecificInformation,
        _extension_additions_list_spec_for_GPRSEventSpecificInformation_detachSpecificInformation,
        _root_component_type_list_2_spec_for_GPRSEventSpecificInformation_detachSpecificInformation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new GPRSEventSpecificInformation_detachSpecificInformation(
        initiatingEntity,
        routeingAreaUpdate,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_GPRSEventSpecificInformation_detachSpecificInformation(el);
}

let _cached_encoder_for_GPRSEventSpecificInformation_detachSpecificInformation: $.ASN1Encoder<GPRSEventSpecificInformation_detachSpecificInformation> | null = null;
export function _encode_GPRSEventSpecificInformation_detachSpecificInformation (value: GPRSEventSpecificInformation_detachSpecificInformation, elGetter: $.ASN1Encoder<GPRSEventSpecificInformation_detachSpecificInformation>): _Element {
    if (!_cached_encoder_for_GPRSEventSpecificInformation_detachSpecificInformation) {
        _cached_encoder_for_GPRSEventSpecificInformation_detachSpecificInformation = function (value: GPRSEventSpecificInformation_detachSpecificInformation): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.initiatingEntity === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_InitiatingEntity, $.BER)(value.initiatingEntity, $.BER)),
            /* IF_ABSENT  */ ((value.routeingAreaUpdate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.routeingAreaUpdate, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_GPRSEventSpecificInformation_detachSpecificInformation(value, elGetter);
}

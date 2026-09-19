/* eslint-disable */
import {
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EASID, _decode_EASID, _encode_EASID } from "../TS33128Payloads/EASID.ta.mjs";
// export { EASID, _decode_EASID, _encode_EASID } from "../TS33128Payloads/EASID.ta.mjs";
import { Daytime, _decode_Daytime, _encode_Daytime } from "../TS33128Payloads/Daytime.ta.mjs";
// export { Daytime, _decode_Daytime, _encode_Daytime } from "../TS33128Payloads/Daytime.ta.mjs";
import { EASProfile, _decode_EASProfile, _encode_EASProfile } from "../TS33128Payloads/EASProfile.ta.mjs";
// export { EASProfile, _decode_EASProfile, _encode_EASProfile } from "../TS33128Payloads/EASProfile.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { EASServiceFeatures, _decode_EASServiceFeatures, _encode_EASServiceFeatures } from "../TS33128Payloads/EASServiceFeatures.ta.mjs";
// export { EASServiceFeatures, _decode_EASServiceFeatures, _encode_EASServiceFeatures } from "../TS33128Payloads/EASServiceFeatures.ta.mjs";


/**
 * @summary EASCharacteristics
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EASCharacteristics ::= SEQUENCE
 * {
 *     eASID                  [1] EASID OPTIONAL,
 *     aSPID                  [2] UTF8String OPTIONAL,
 *     eASType                [3] UTF8String OPTIONAL,
 *     eASSchedule            [4] Daytime OPTIONAL,
 *     eASProfile             [5] EASProfile OPTIONAL,
 *     eASServiceArea         [6] Location OPTIONAL,
 *     eASServicePermLevel    [7] UTF8String OPTIONAL,
 *     eASServiceFeatures     [8] EASServiceFeatures OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EASCharacteristics {
    constructor (
        /**
         * @summary `eASID`.
         * @public
         * @readonly
         */
        readonly eASID: OPTIONAL<EASID>,
        /**
         * @summary `aSPID`.
         * @public
         * @readonly
         */
        readonly aSPID: OPTIONAL<UTF8String>,
        /**
         * @summary `eASType`.
         * @public
         * @readonly
         */
        readonly eASType: OPTIONAL<UTF8String>,
        /**
         * @summary `eASSchedule`.
         * @public
         * @readonly
         */
        readonly eASSchedule: OPTIONAL<Daytime>,
        /**
         * @summary `eASProfile`.
         * @public
         * @readonly
         */
        readonly eASProfile: OPTIONAL<EASProfile>,
        /**
         * @summary `eASServiceArea`.
         * @public
         * @readonly
         */
        readonly eASServiceArea: OPTIONAL<Location>,
        /**
         * @summary `eASServicePermLevel`.
         * @public
         * @readonly
         */
        readonly eASServicePermLevel: OPTIONAL<UTF8String>,
        /**
         * @summary `eASServiceFeatures`.
         * @public
         * @readonly
         */
        readonly eASServiceFeatures: OPTIONAL<EASServiceFeatures>
    ) {}

    /**
     * @summary Restructures an object into a EASCharacteristics
     * @description
     * 
     * This takes an `object` and converts it to a `EASCharacteristics`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EASCharacteristics`.
     * @returns {EASCharacteristics}
     */
    public static _from_object (_o: { [_K in keyof (EASCharacteristics)]: (EASCharacteristics)[_K] }): EASCharacteristics {
        return new EASCharacteristics(_o.eASID, _o.aSPID, _o.eASType, _o.eASSchedule, _o.eASProfile, _o.eASServiceArea, _o.eASServicePermLevel, _o.eASServiceFeatures);
    }


}

/**
 * @summary The Leading Root Component Types of EASCharacteristics
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EASCharacteristics: $.ComponentSpec[] = [
    new $.ComponentSpec("eASID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aSPID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("eASType", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("eASSchedule", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("eASProfile", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("eASServiceArea", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("eASServicePermLevel", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("eASServiceFeatures", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of EASCharacteristics
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EASCharacteristics: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EASCharacteristics
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EASCharacteristics: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EASCharacteristics: $.ASN1Decoder<EASCharacteristics> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EASCharacteristics
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EASCharacteristics (el: _Element): EASCharacteristics {
    if (!_cached_decoder_for_EASCharacteristics) { _cached_decoder_for_EASCharacteristics = function (el: _Element): EASCharacteristics {
    let eASID: OPTIONAL<EASID>;
    let aSPID: OPTIONAL<UTF8String>;
    let eASType: OPTIONAL<UTF8String>;
    let eASSchedule: OPTIONAL<Daytime>;
    let eASProfile: OPTIONAL<EASProfile>;
    let eASServiceArea: OPTIONAL<Location>;
    let eASServicePermLevel: OPTIONAL<UTF8String>;
    let eASServiceFeatures: OPTIONAL<EASServiceFeatures>;
    const callbacks: $.DecodingMap = {
        "eASID": (_el: _Element): void => { eASID = $._decode_implicit<EASID>(() => _decode_EASID)(_el); },
        "aSPID": (_el: _Element): void => { aSPID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "eASType": (_el: _Element): void => { eASType = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "eASSchedule": (_el: _Element): void => { eASSchedule = $._decode_implicit<Daytime>(() => _decode_Daytime)(_el); },
        "eASProfile": (_el: _Element): void => { eASProfile = $._decode_implicit<EASProfile>(() => _decode_EASProfile)(_el); },
        "eASServiceArea": (_el: _Element): void => { eASServiceArea = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "eASServicePermLevel": (_el: _Element): void => { eASServicePermLevel = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "eASServiceFeatures": (_el: _Element): void => { eASServiceFeatures = $._decode_implicit<EASServiceFeatures>(() => _decode_EASServiceFeatures)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EASCharacteristics,
        _extension_additions_list_spec_for_EASCharacteristics,
        _root_component_type_list_2_spec_for_EASCharacteristics,
        undefined,
    );
    return new EASCharacteristics(
        eASID,
        aSPID,
        eASType,
        eASSchedule,
        eASProfile,
        eASServiceArea,
        eASServicePermLevel,
        eASServiceFeatures
    );
}; }
    return _cached_decoder_for_EASCharacteristics(el);
}

let _cached_encoder_for_EASCharacteristics: $.ASN1Encoder<EASCharacteristics> | null = null;

/**
 * @summary Encodes a(n) EASCharacteristics into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EASCharacteristics, encoded as an ASN.1 Element.
 */
export
function _encode_EASCharacteristics (value: EASCharacteristics, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EASCharacteristics) { _cached_encoder_for_EASCharacteristics = function (value: EASCharacteristics, elGetter: $.ASN1Encoder<EASCharacteristics>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.eASID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_EASID, $.BER)(value.eASID, $.BER)),
            /* IF_ABSENT  */ ((value.aSPID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.aSPID, $.BER)),
            /* IF_ABSENT  */ ((value.eASType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeUTF8String, $.BER)(value.eASType, $.BER)),
            /* IF_ABSENT  */ ((value.eASSchedule === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_Daytime, $.BER)(value.eASSchedule, $.BER)),
            /* IF_ABSENT  */ ((value.eASProfile === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_EASProfile, $.BER)(value.eASProfile, $.BER)),
            /* IF_ABSENT  */ ((value.eASServiceArea === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_Location, $.BER)(value.eASServiceArea, $.BER)),
            /* IF_ABSENT  */ ((value.eASServicePermLevel === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeUTF8String, $.BER)(value.eASServicePermLevel, $.BER)),
            /* IF_ABSENT  */ ((value.eASServiceFeatures === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_EASServiceFeatures, $.BER)(value.eASServiceFeatures, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EASCharacteristics(value, elGetter);
}


/* eslint-enable */

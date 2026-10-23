/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RoamingTrigger, _decode_RoamingTrigger, _encode_RoamingTrigger } from "../CHFChargingDataTypes/RoamingTrigger.ta.mjs";
import { PartialRecordMethod, _decode_PartialRecordMethod, _encode_PartialRecordMethod, _enum_for_PartialRecordMethod } from "../CHFChargingDataTypes/PartialRecordMethod.ta.mjs";


/**
 * @summary RoamingChargingProfile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamingChargingProfile ::= SEQUENCE {
 *    roamingTriggers       [0] IMPLICIT SEQUENCE  OF
 *       RoamingTrigger OPTIONAL,
 *    partialRecordMethod   [1] IMPLICIT PartialRecordMethod OPTIONAL}
 * ```
 * 
 * @class
 */
export
class RoamingChargingProfile {
    /**
     * @summary `roamingTriggers`.
     * @public
     * @readonly
     */
    readonly roamingTriggers: OPTIONAL<RoamingTrigger[]>;
    /**
     * @summary `partialRecordMethod`.
     * @public
     * @readonly
     */
    readonly partialRecordMethod: OPTIONAL<PartialRecordMethod>;

    constructor (
        roamingTriggers?: OPTIONAL<RoamingTrigger[]>,
        partialRecordMethod?: OPTIONAL<PartialRecordMethod>
    ) {
        this.roamingTriggers = roamingTriggers;
        this.partialRecordMethod = partialRecordMethod;
    }

    /**
     * @summary Restructures an object into a RoamingChargingProfile
     * @description
     * 
     * This takes an `object` and converts it to a `RoamingChargingProfile`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RoamingChargingProfile`.
     * @returns {RoamingChargingProfile}
     */
    public static _from_object (_o: { [_K in keyof (RoamingChargingProfile)]: (RoamingChargingProfile)[_K] }): RoamingChargingProfile {
        return new RoamingChargingProfile(_o.roamingTriggers, _o.partialRecordMethod);
    }

        /**
         * @summary The enum used as the type of the component `partialRecordMethod`
         * @public
         * @static
         */

    public static _enum_for_partialRecordMethod = _enum_for_PartialRecordMethod;
}

/**
 * @summary The Leading Root Component Types of RoamingChargingProfile
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RoamingChargingProfile: $.ComponentSpec[] = [
    new $.ComponentSpec("roamingTriggers", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("partialRecordMethod", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of RoamingChargingProfile
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RoamingChargingProfile: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RoamingChargingProfile
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RoamingChargingProfile: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RoamingChargingProfile: $.ASN1Decoder<RoamingChargingProfile> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RoamingChargingProfile
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RoamingChargingProfile (el: _Element): RoamingChargingProfile {
    if (!_cached_decoder_for_RoamingChargingProfile) { _cached_decoder_for_RoamingChargingProfile = function (el: _Element): RoamingChargingProfile {
    let roamingTriggers: OPTIONAL<RoamingTrigger[]>;
    let partialRecordMethod: OPTIONAL<PartialRecordMethod>;
    const callbacks: $.DecodingMap = {
        "roamingTriggers": (_el: _Element): void => { roamingTriggers = $._decode_implicit<RoamingTrigger[]>(() => $._decodeSequenceOf<RoamingTrigger>(() => _decode_RoamingTrigger))(_el); },
        "partialRecordMethod": (_el: _Element): void => { partialRecordMethod = $._decode_implicit<PartialRecordMethod>(() => _decode_PartialRecordMethod)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RoamingChargingProfile,
        _extension_additions_list_spec_for_RoamingChargingProfile,
        _root_component_type_list_2_spec_for_RoamingChargingProfile,
        undefined,
    );
    return new RoamingChargingProfile(
        roamingTriggers,
        partialRecordMethod
    );
}; }
    return _cached_decoder_for_RoamingChargingProfile(el);
}

let _cached_encoder_for_RoamingChargingProfile: $.ASN1Encoder<RoamingChargingProfile> | null = null;

/**
 * @summary Encodes a(n) RoamingChargingProfile into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoamingChargingProfile, encoded as an ASN.1 Element.
 */
export
function _encode_RoamingChargingProfile (value: RoamingChargingProfile, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RoamingChargingProfile) { _cached_encoder_for_RoamingChargingProfile = function (value: RoamingChargingProfile, _elGetter: $.ASN1Encoder<RoamingChargingProfile>): _Element {
    const _components: _Element[] = [];
    if (value.roamingTriggers !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<RoamingTrigger>(() => _encode_RoamingTrigger, $.BER), $.BER)(value.roamingTriggers, $.BER));
    }
    if (value.partialRecordMethod !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_PartialRecordMethod, $.BER)(value.partialRecordMethod, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RoamingChargingProfile(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
import { EquivalentPLMNs, _decode_EquivalentPLMNs, _encode_EquivalentPLMNs } from "../TS33128Payloads/EquivalentPLMNs.ta.mjs";
// export { EquivalentPLMNs, _decode_EquivalentPLMNs, _encode_EquivalentPLMNs } from "../TS33128Payloads/EquivalentPLMNs.ta.mjs";
import { RATRestrictions, _decode_RATRestrictions, _encode_RATRestrictions } from "../TS33128Payloads/RATRestrictions.ta.mjs";
// export { RATRestrictions, _decode_RATRestrictions, _encode_RATRestrictions } from "../TS33128Payloads/RATRestrictions.ta.mjs";
import { ForbiddenAreaInformation, _decode_ForbiddenAreaInformation, _encode_ForbiddenAreaInformation } from "../TS33128Payloads/ForbiddenAreaInformation.ta.mjs";
// export { ForbiddenAreaInformation, _decode_ForbiddenAreaInformation, _encode_ForbiddenAreaInformation } from "../TS33128Payloads/ForbiddenAreaInformation.ta.mjs";
import { ServiceAreaInformation, _decode_ServiceAreaInformation, _encode_ServiceAreaInformation } from "../TS33128Payloads/ServiceAreaInformation.ta.mjs";
// export { ServiceAreaInformation, _decode_ServiceAreaInformation, _encode_ServiceAreaInformation } from "../TS33128Payloads/ServiceAreaInformation.ta.mjs";


/**
 * @summary MobilityRestrictionList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MobilityRestrictionList ::= SEQUENCE
 * {
 *     servingPLMN               [1] PLMNID,
 *     equivalentPLMNs           [2] EquivalentPLMNs OPTIONAL,
 *     rATRestrictions           [3] RATRestrictions OPTIONAL,
 *     forbiddenAreaInformation  [4] ForbiddenAreaInformation OPTIONAL,
 *     serviceAreaInformation    [5] ServiceAreaInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MobilityRestrictionList {
    constructor (
        /**
         * @summary `servingPLMN`.
         * @public
         * @readonly
         */
        readonly servingPLMN: PLMNID,
        /**
         * @summary `equivalentPLMNs`.
         * @public
         * @readonly
         */
        readonly equivalentPLMNs: OPTIONAL<EquivalentPLMNs>,
        /**
         * @summary `rATRestrictions`.
         * @public
         * @readonly
         */
        readonly rATRestrictions: OPTIONAL<RATRestrictions>,
        /**
         * @summary `forbiddenAreaInformation`.
         * @public
         * @readonly
         */
        readonly forbiddenAreaInformation: OPTIONAL<ForbiddenAreaInformation>,
        /**
         * @summary `serviceAreaInformation`.
         * @public
         * @readonly
         */
        readonly serviceAreaInformation: OPTIONAL<ServiceAreaInformation>
    ) {}

    /**
     * @summary Restructures an object into a MobilityRestrictionList
     * @description
     * 
     * This takes an `object` and converts it to a `MobilityRestrictionList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MobilityRestrictionList`.
     * @returns {MobilityRestrictionList}
     */
    public static _from_object (_o: { [_K in keyof (MobilityRestrictionList)]: (MobilityRestrictionList)[_K] }): MobilityRestrictionList {
        return new MobilityRestrictionList(_o.servingPLMN, _o.equivalentPLMNs, _o.rATRestrictions, _o.forbiddenAreaInformation, _o.serviceAreaInformation);
    }


}

/**
 * @summary The Leading Root Component Types of MobilityRestrictionList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MobilityRestrictionList: $.ComponentSpec[] = [
    new $.ComponentSpec("servingPLMN", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("equivalentPLMNs", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("rATRestrictions", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("forbiddenAreaInformation", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("serviceAreaInformation", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of MobilityRestrictionList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MobilityRestrictionList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MobilityRestrictionList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MobilityRestrictionList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MobilityRestrictionList: $.ASN1Decoder<MobilityRestrictionList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MobilityRestrictionList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MobilityRestrictionList (el: _Element): MobilityRestrictionList {
    if (!_cached_decoder_for_MobilityRestrictionList) { _cached_decoder_for_MobilityRestrictionList = function (el: _Element): MobilityRestrictionList {
    let servingPLMN!: PLMNID;
    let equivalentPLMNs: OPTIONAL<EquivalentPLMNs>;
    let rATRestrictions: OPTIONAL<RATRestrictions>;
    let forbiddenAreaInformation: OPTIONAL<ForbiddenAreaInformation>;
    let serviceAreaInformation: OPTIONAL<ServiceAreaInformation>;
    const callbacks: $.DecodingMap = {
        "servingPLMN": (_el: _Element): void => { servingPLMN = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(_el); },
        "equivalentPLMNs": (_el: _Element): void => { equivalentPLMNs = $._decode_implicit<EquivalentPLMNs>(() => _decode_EquivalentPLMNs)(_el); },
        "rATRestrictions": (_el: _Element): void => { rATRestrictions = $._decode_implicit<RATRestrictions>(() => _decode_RATRestrictions)(_el); },
        "forbiddenAreaInformation": (_el: _Element): void => { forbiddenAreaInformation = $._decode_implicit<ForbiddenAreaInformation>(() => _decode_ForbiddenAreaInformation)(_el); },
        "serviceAreaInformation": (_el: _Element): void => { serviceAreaInformation = $._decode_implicit<ServiceAreaInformation>(() => _decode_ServiceAreaInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MobilityRestrictionList,
        _extension_additions_list_spec_for_MobilityRestrictionList,
        _root_component_type_list_2_spec_for_MobilityRestrictionList,
        undefined,
    );
    return new MobilityRestrictionList(
        servingPLMN,
        equivalentPLMNs,
        rATRestrictions,
        forbiddenAreaInformation,
        serviceAreaInformation
    );
}; }
    return _cached_decoder_for_MobilityRestrictionList(el);
}

let _cached_encoder_for_MobilityRestrictionList: $.ASN1Encoder<MobilityRestrictionList> | null = null;

/**
 * @summary Encodes a(n) MobilityRestrictionList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MobilityRestrictionList, encoded as an ASN.1 Element.
 */
export
function _encode_MobilityRestrictionList (value: MobilityRestrictionList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MobilityRestrictionList) { _cached_encoder_for_MobilityRestrictionList = function (value: MobilityRestrictionList, elGetter: $.ASN1Encoder<MobilityRestrictionList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PLMNID, $.BER)(value.servingPLMN, $.BER),
            /* IF_ABSENT  */ ((value.equivalentPLMNs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_EquivalentPLMNs, $.BER)(value.equivalentPLMNs, $.BER)),
            /* IF_ABSENT  */ ((value.rATRestrictions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_RATRestrictions, $.BER)(value.rATRestrictions, $.BER)),
            /* IF_ABSENT  */ ((value.forbiddenAreaInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ForbiddenAreaInformation, $.BER)(value.forbiddenAreaInformation, $.BER)),
            /* IF_ABSENT  */ ((value.serviceAreaInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ServiceAreaInformation, $.BER)(value.serviceAreaInformation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MobilityRestrictionList(value, elGetter);
}


/* eslint-enable */

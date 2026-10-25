/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
import { type EquivalentPLMNs, _decode_EquivalentPLMNs, _encode_EquivalentPLMNs } from "../TS33128Payloads/EquivalentPLMNs.ta.mjs";
// export { EquivalentPLMNs, _decode_EquivalentPLMNs, _encode_EquivalentPLMNs } from "../TS33128Payloads/EquivalentPLMNs.ta.mjs";
import { type RATRestrictions, _decode_RATRestrictions, _encode_RATRestrictions } from "../TS33128Payloads/RATRestrictions.ta.mjs";
// export { RATRestrictions, _decode_RATRestrictions, _encode_RATRestrictions } from "../TS33128Payloads/RATRestrictions.ta.mjs";
import { ForbiddenAreaInformation, _decode_ForbiddenAreaInformation, _encode_ForbiddenAreaInformation } from "../TS33128Payloads/ForbiddenAreaInformation.ta.mjs";
// export { ForbiddenAreaInformation, _decode_ForbiddenAreaInformation, _encode_ForbiddenAreaInformation } from "../TS33128Payloads/ForbiddenAreaInformation.ta.mjs";
import { type ServiceAreaInformation, _decode_ServiceAreaInformation, _encode_ServiceAreaInformation } from "../TS33128Payloads/ServiceAreaInformation.ta.mjs";
// export { ServiceAreaInformation, _decode_ServiceAreaInformation, _encode_ServiceAreaInformation } from "../TS33128Payloads/ServiceAreaInformation.ta.mjs";


/**
 * @summary MobilityRestrictionList
 * @description
 * 
 * Provides roaming or access restrictions related to mobility from AMF to the
 * RAN Node. Shall include when sent in the DOWNLINK NAS TRANSPORT REQUEST or
 * when known at the NF. See TS 38.413 [23] clause 9.3.1.85.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.16.
 * https://www.3gpp.org/DynaReport/33128.htm
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
    /**
     * @summary `servingPLMN`.
     * @public
     * @readonly
     */
    readonly servingPLMN: PLMNID;
    /**
     * @summary `equivalentPLMNs`.
     * @public
     * @readonly
     */
    readonly equivalentPLMNs: OPTIONAL<EquivalentPLMNs>;
    /**
     * @summary `rATRestrictions`.
     * @public
     * @readonly
     */
    readonly rATRestrictions: OPTIONAL<RATRestrictions>;
    /**
     * @summary `forbiddenAreaInformation`.
     * @public
     * @readonly
     */
    readonly forbiddenAreaInformation: OPTIONAL<ForbiddenAreaInformation>;
    /**
     * @summary `serviceAreaInformation`.
     * @public
     * @readonly
     */
    readonly serviceAreaInformation: OPTIONAL<ServiceAreaInformation>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        servingPLMN: PLMNID,
        equivalentPLMNs?: OPTIONAL<EquivalentPLMNs>,
        rATRestrictions?: OPTIONAL<RATRestrictions>,
        forbiddenAreaInformation?: OPTIONAL<ForbiddenAreaInformation>,
        serviceAreaInformation?: OPTIONAL<ServiceAreaInformation>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.servingPLMN = servingPLMN;
        this.equivalentPLMNs = equivalentPLMNs;
        this.rATRestrictions = rATRestrictions;
        this.forbiddenAreaInformation = forbiddenAreaInformation;
        this.serviceAreaInformation = serviceAreaInformation;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

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
        return new MobilityRestrictionList(_o.servingPLMN, _o.equivalentPLMNs, _o.rATRestrictions, _o.forbiddenAreaInformation, _o.serviceAreaInformation, _o._unrecognizedExtensionsList);
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
    const _unrecognizedExtensionsList: _Element[] = [];
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
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MobilityRestrictionList(
        servingPLMN,
        equivalentPLMNs,
        rATRestrictions,
        forbiddenAreaInformation,
        serviceAreaInformation,
        _unrecognizedExtensionsList
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
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PLMNID, $.BER)(value.servingPLMN, $.BER);
    if (value.equivalentPLMNs !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_EquivalentPLMNs, $.BER)(value.equivalentPLMNs, $.BER);
    }
    if (value.rATRestrictions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_RATRestrictions, $.BER)(value.rATRestrictions, $.BER);
    }
    if (value.forbiddenAreaInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_ForbiddenAreaInformation, $.BER)(value.forbiddenAreaInformation, $.BER);
    }
    if (value.serviceAreaInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_ServiceAreaInformation, $.BER)(value.serviceAreaInformation, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MobilityRestrictionList(value, elGetter);
}


/* eslint-enable */

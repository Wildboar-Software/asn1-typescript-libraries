/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AccessPointInformation, _decode_AccessPointInformation, _encode_AccessPointInformation } from "../DistributedOperations/AccessPointInformation.ta.mjs";
// export { AccessPointInformation, _decode_AccessPointInformation, _encode_AccessPointInformation } from "../DistributedOperations/AccessPointInformation.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";


/**
 * @summary ReferralParameter_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReferralParameter-Type ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class ReferralParameter_Type {
    /**
     * @summary `tryhere`.
     * @public
     * @readonly
     */
    readonly tryhere: AccessPointInformation;
    /**
     * @summary `securityParameters`.
     * @public
     * @readonly
     */
    readonly securityParameters: OPTIONAL<SecurityParameters>;

    constructor (
        tryhere: AccessPointInformation,
        securityParameters: OPTIONAL<SecurityParameters>
    ) {
        this.tryhere = tryhere;
        this.securityParameters = securityParameters;
    }

    /**
     * @summary Restructures an object into a ReferralParameter_Type
     * @description
     * 
     * This takes an `object` and converts it to a `ReferralParameter_Type`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReferralParameter_Type`.
     * @returns {ReferralParameter_Type}
     */
    public static _from_object (_o: { [_K in keyof (ReferralParameter_Type)]: (ReferralParameter_Type)[_K] }): ReferralParameter_Type {
        return new ReferralParameter_Type(_o.tryhere, _o.securityParameters);
    }


}

/**
 * @summary The Leading Root Component Types of ReferralParameter_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReferralParameter_Type: $.ComponentSpec[] = [
    new $.ComponentSpec("tryhere", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("securityParameters", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ReferralParameter_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReferralParameter_Type: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReferralParameter_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReferralParameter_Type: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReferralParameter_Type: $.ASN1Decoder<ReferralParameter_Type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReferralParameter_Type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReferralParameter_Type (el: _Element): ReferralParameter_Type {
    if (!_cached_decoder_for_ReferralParameter_Type) { _cached_decoder_for_ReferralParameter_Type = function (el: _Element): ReferralParameter_Type {
    let tryhere!: AccessPointInformation;
    let securityParameters: OPTIONAL<SecurityParameters>;
    const callbacks: $.DecodingMap = {
        "tryhere": (_el: _Element): void => { tryhere = $._decode_implicit<AccessPointInformation>(() => _decode_AccessPointInformation)(_el); },
        "securityParameters": (_el: _Element): void => { securityParameters = $._decode_implicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReferralParameter_Type,
        _extension_additions_list_spec_for_ReferralParameter_Type,
        _root_component_type_list_2_spec_for_ReferralParameter_Type,
        undefined,
    );
    return new ReferralParameter_Type(
        tryhere,
        securityParameters
    );
}; }
    return _cached_decoder_for_ReferralParameter_Type(el);
}

let _cached_encoder_for_ReferralParameter_Type: $.ASN1Encoder<ReferralParameter_Type> | null = null;

/**
 * @summary Encodes a(n) ReferralParameter_Type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReferralParameter_Type, encoded as an ASN.1 Element.
 */
export
function _encode_ReferralParameter_Type (value: ReferralParameter_Type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReferralParameter_Type) { _cached_encoder_for_ReferralParameter_Type = function (value: ReferralParameter_Type, elGetter: $.ASN1Encoder<ReferralParameter_Type>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_AccessPointInformation, $.BER)(value.tryhere, $.BER));
    if (value.securityParameters !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_SecurityParameters, $.BER)(value.securityParameters, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ReferralParameter_Type(value, elGetter);
}


/* eslint-enable */

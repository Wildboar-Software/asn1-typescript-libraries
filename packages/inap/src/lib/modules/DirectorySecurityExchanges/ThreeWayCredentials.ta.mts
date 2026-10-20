/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CertificationPath, _decode_CertificationPath, _encode_CertificationPath } from "../AuthenticationFramework/CertificationPath.ta.mjs";
// export { CertificationPath, _decode_CertificationPath, _encode_CertificationPath } from "../AuthenticationFramework/CertificationPath.ta.mjs";
import { ThreeWayToken, _decode_ThreeWayToken, _encode_ThreeWayToken } from "../DirectorySecurityExchanges/ThreeWayToken.ta.mjs";
// export { ThreeWayToken, _decode_ThreeWayToken, _encode_ThreeWayToken } from "../DirectorySecurityExchanges/ThreeWayToken.ta.mjs";
import { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
// export { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";


/**
 * @summary ThreeWayCredentials
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ThreeWayCredentials ::= SET {
 *   certification-path  [0]  CertificationPath OPTIONAL,
 *   token               [1]  ThreeWayToken,
 *   name                [2]  DistinguishedName OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ThreeWayCredentials {
    /**
     * @summary `certification_path`.
     * @public
     * @readonly
     */
    readonly certification_path: OPTIONAL<CertificationPath>;
    /**
     * @summary `token`.
     * @public
     * @readonly
     */
    readonly token: ThreeWayToken;
    /**
     * @summary `name`.
     * @public
     * @readonly
     */
    readonly name: OPTIONAL<DistinguishedName>;

    constructor (
        certification_path: OPTIONAL<CertificationPath>,
        token: ThreeWayToken,
        name: OPTIONAL<DistinguishedName>
    ) {
        this.certification_path = certification_path;
        this.token = token;
        this.name = name;
    }

    /**
     * @summary Restructures an object into a ThreeWayCredentials
     * @description
     * 
     * This takes an `object` and converts it to a `ThreeWayCredentials`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ThreeWayCredentials`.
     * @returns {ThreeWayCredentials}
     */
    public static _from_object (_o: { [_K in keyof (ThreeWayCredentials)]: (ThreeWayCredentials)[_K] }): ThreeWayCredentials {
        return new ThreeWayCredentials(_o.certification_path, _o.token, _o.name);
    }


}

/**
 * @summary The Leading Root Component Types of ThreeWayCredentials
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ThreeWayCredentials: $.ComponentSpec[] = [
    new $.ComponentSpec("certification-path", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("token", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("name", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ThreeWayCredentials
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ThreeWayCredentials: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ThreeWayCredentials
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ThreeWayCredentials: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ThreeWayCredentials: $.ASN1Decoder<ThreeWayCredentials> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ThreeWayCredentials
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ThreeWayCredentials (el: _Element): ThreeWayCredentials {
    if (!_cached_decoder_for_ThreeWayCredentials) { _cached_decoder_for_ThreeWayCredentials = function (el: _Element): ThreeWayCredentials {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let certification_path: OPTIONAL<CertificationPath>;
    let token!: ThreeWayToken;
    let name: OPTIONAL<DistinguishedName>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "certification-path": (_el: _Element): void => { certification_path = $._decode_explicit<CertificationPath>(() => _decode_CertificationPath)(_el); },
        "token": (_el: _Element): void => { token = $._decode_explicit<ThreeWayToken>(() => _decode_ThreeWayToken)(_el); },
        "name": (_el: _Element): void => { name = $._decode_explicit<DistinguishedName>(() => _decode_DistinguishedName)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_ThreeWayCredentials,
        _extension_additions_list_spec_for_ThreeWayCredentials,
        _root_component_type_list_2_spec_for_ThreeWayCredentials,
        undefined,
    );
    return new ThreeWayCredentials( /* SET_CONSTRUCTOR_CALL */
        certification_path,
        token,
        name
    );
}; }
    return _cached_decoder_for_ThreeWayCredentials(el);
}

let _cached_encoder_for_ThreeWayCredentials: $.ASN1Encoder<ThreeWayCredentials> | null = null;

/**
 * @summary Encodes a(n) ThreeWayCredentials into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ThreeWayCredentials, encoded as an ASN.1 Element.
 */
export
function _encode_ThreeWayCredentials (value: ThreeWayCredentials, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ThreeWayCredentials) { _cached_encoder_for_ThreeWayCredentials = function (value: ThreeWayCredentials, elGetter: $.ASN1Encoder<ThreeWayCredentials>): _Element {
    const _components: _Element[] = [];
    if (value.certification_path !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_CertificationPath, $.BER)(value.certification_path, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_ThreeWayToken, $.BER)(value.token, $.BER));
    if (value.name !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_DistinguishedName, $.BER)(value.name, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_ThreeWayCredentials(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1OverflowError,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPS_MIP_SpecificParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPS-MIP-SpecificParameters ::= SEQUENCE
 * {
 *     lifetime                              [1]   INTEGER (0.. 65535)               OPTIONAL,
 *     homeAddress                           [2]   OCTET STRING (SIZE (4))           OPTIONAL,
 *     careOfAddress                         [3]   OCTET STRING (SIZE (4))           OPTIONAL,
 *     homeAgentAddress                      [4]   OCTET STRING (SIZE (4))           OPTIONAL,
 *     code                                  [5]   INTEGER (0..255)                  OPTIONAL,
 *     foreignDomainAddress                  [7]   OCTET STRING (SIZE (4))           OPTIONAL,
 *     ...
 *     -- parameters coded according to 3GPP TS 29.279 [63] and RFCs specifically
 *     -- referenced in it.
 * }
 * ```
 * 
 * @class
 */
export
class EPS_MIP_SpecificParameters {
    /**
     * @summary `lifetime`.
     * @public
     * @readonly
     */
    readonly lifetime: OPTIONAL<INTEGER>;
    /**
     * @summary `homeAddress`.
     * @public
     * @readonly
     */
    readonly homeAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `careOfAddress`.
     * @public
     * @readonly
     */
    readonly careOfAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `homeAgentAddress`.
     * @public
     * @readonly
     */
    readonly homeAgentAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `code`.
     * @public
     * @readonly
     */
    readonly code: OPTIONAL<INTEGER>;
    /**
     * @summary `foreignDomainAddress`.
     * @public
     * @readonly
     */
    readonly foreignDomainAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        lifetime: OPTIONAL<INTEGER>,
        homeAddress: OPTIONAL<OCTET_STRING>,
        careOfAddress: OPTIONAL<OCTET_STRING>,
        homeAgentAddress: OPTIONAL<OCTET_STRING>,
        code: OPTIONAL<INTEGER>,
        foreignDomainAddress: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.lifetime = lifetime;
        this.homeAddress = homeAddress;
        this.careOfAddress = careOfAddress;
        this.homeAgentAddress = homeAgentAddress;
        this.code = code;
        this.foreignDomainAddress = foreignDomainAddress;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EPS_MIP_SpecificParameters
     * @description
     * 
     * This takes an `object` and converts it to a `EPS_MIP_SpecificParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPS_MIP_SpecificParameters`.
     * @returns {EPS_MIP_SpecificParameters}
     */
    public static _from_object (_o: { [_K in keyof (EPS_MIP_SpecificParameters)]: (EPS_MIP_SpecificParameters)[_K] }): EPS_MIP_SpecificParameters {
        return new EPS_MIP_SpecificParameters(_o.lifetime, _o.homeAddress, _o.careOfAddress, _o.homeAgentAddress, _o.code, _o.foreignDomainAddress, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EPS_MIP_SpecificParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPS_MIP_SpecificParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("lifetime", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("homeAddress", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("careOfAddress", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("homeAgentAddress", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("code", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("foreignDomainAddress", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of EPS_MIP_SpecificParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPS_MIP_SpecificParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPS_MIP_SpecificParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPS_MIP_SpecificParameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPS_MIP_SpecificParameters: $.ASN1Decoder<EPS_MIP_SpecificParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPS_MIP_SpecificParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPS_MIP_SpecificParameters (el: _Element): EPS_MIP_SpecificParameters {
    if (!_cached_decoder_for_EPS_MIP_SpecificParameters) { _cached_decoder_for_EPS_MIP_SpecificParameters = function (el: _Element): EPS_MIP_SpecificParameters {
    let lifetime: OPTIONAL<INTEGER>;
    let homeAddress: OPTIONAL<OCTET_STRING>;
    let careOfAddress: OPTIONAL<OCTET_STRING>;
    let homeAgentAddress: OPTIONAL<OCTET_STRING>;
    let code: OPTIONAL<INTEGER>;
    let foreignDomainAddress: OPTIONAL<OCTET_STRING>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "lifetime": (_el: _Element): void => {
            lifetime = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof lifetime === "bigint" ? lifetime : BigInt(lifetime);
            if (_n < 0n || _n > 65535n) {
                throw new ASN1OverflowError("EPS_MIP_SpecificParameters.lifetime violates INTEGER range");
            }
        },
        "homeAddress": (_el: _Element): void => {
            homeAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (homeAddress.length < 4 || homeAddress.length > 4) {
                throw new ASN1SizeError("EPS_MIP_SpecificParameters.homeAddress violates SIZE constraint");
            }
        },
        "careOfAddress": (_el: _Element): void => {
            careOfAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (careOfAddress.length < 4 || careOfAddress.length > 4) {
                throw new ASN1SizeError("EPS_MIP_SpecificParameters.careOfAddress violates SIZE constraint");
            }
        },
        "homeAgentAddress": (_el: _Element): void => {
            homeAgentAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (homeAgentAddress.length < 4 || homeAgentAddress.length > 4) {
                throw new ASN1SizeError("EPS_MIP_SpecificParameters.homeAgentAddress violates SIZE constraint");
            }
        },
        "code": (_el: _Element): void => {
            code = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof code === "bigint" ? code : BigInt(code);
            if (_n < 0n || _n > 255n) {
                throw new ASN1OverflowError("EPS_MIP_SpecificParameters.code violates INTEGER range");
            }
        },
        "foreignDomainAddress": (_el: _Element): void => {
            foreignDomainAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (foreignDomainAddress.length < 4 || foreignDomainAddress.length > 4) {
                throw new ASN1SizeError("EPS_MIP_SpecificParameters.foreignDomainAddress violates SIZE constraint");
            }
        }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPS_MIP_SpecificParameters,
        _extension_additions_list_spec_for_EPS_MIP_SpecificParameters,
        _root_component_type_list_2_spec_for_EPS_MIP_SpecificParameters,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EPS_MIP_SpecificParameters(
        lifetime,
        homeAddress,
        careOfAddress,
        homeAgentAddress,
        code,
        foreignDomainAddress,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EPS_MIP_SpecificParameters(el);
}

let _cached_encoder_for_EPS_MIP_SpecificParameters: $.ASN1Encoder<EPS_MIP_SpecificParameters> | null = null;

/**
 * @summary Encodes a(n) EPS_MIP_SpecificParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPS_MIP_SpecificParameters, encoded as an ASN.1 Element.
 */
export
function _encode_EPS_MIP_SpecificParameters (value: EPS_MIP_SpecificParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPS_MIP_SpecificParameters) { _cached_encoder_for_EPS_MIP_SpecificParameters = function (value: EPS_MIP_SpecificParameters, elGetter: $.ASN1Encoder<EPS_MIP_SpecificParameters>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.lifetime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.lifetime, $.BER);
    }
    if (value.homeAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.homeAddress, $.BER);
    }
    if (value.careOfAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.careOfAddress, $.BER);
    }
    if (value.homeAgentAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.homeAgentAddress, $.BER);
    }
    if (value.code !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.code, $.BER);
    }
    if (value.foreignDomainAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.foreignDomainAddress, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EPS_MIP_SpecificParameters(value, elGetter);
}


/* eslint-enable */

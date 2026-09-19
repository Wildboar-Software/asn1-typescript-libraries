/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OCTET_STRING,
    OPTIONAL
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
 *  lifetime [1] INTEGER (0.. 65535) OPTIONAL,
 *  homeAddress [2] OCTET STRING (SIZE (4)) OPTIONAL,
 *  careOfAddress [3] OCTET STRING (SIZE (4)) OPTIONAL,
 *  homeAgentAddress [4] OCTET STRING (SIZE (4)) OPTIONAL,
 *  code [5] INTEGER (0..255) OPTIONAL,
 *  foreignDomainAddress [7] OCTET STRING (SIZE (4)) OPTIONAL,
 *  ...
 *  -- parameters coded according to 3GPP TS 29.279 [63] and RFCs specifically
 *  -- referenced in it.
 * }
 * ```
 * 
 * @class
 */
export
class EPS_MIP_SpecificParameters {
    constructor (
        /**
         * @summary `lifetime`.
         * @public
         * @readonly
         */
        readonly lifetime: OPTIONAL<INTEGER>,
        /**
         * @summary `homeAddress`.
         * @public
         * @readonly
         */
        readonly homeAddress: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `careOfAddress`.
         * @public
         * @readonly
         */
        readonly careOfAddress: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `homeAgentAddress`.
         * @public
         * @readonly
         */
        readonly homeAgentAddress: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `code`.
         * @public
         * @readonly
         */
        readonly code: OPTIONAL<INTEGER>,
        /**
         * @summary `foreignDomainAddress`.
         * @public
         * @readonly
         */
        readonly foreignDomainAddress: OPTIONAL<OCTET_STRING>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

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
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "lifetime": (_el: _Element): void => { lifetime = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "homeAddress": (_el: _Element): void => { homeAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "careOfAddress": (_el: _Element): void => { careOfAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "homeAgentAddress": (_el: _Element): void => { homeAgentAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "code": (_el: _Element): void => { code = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "foreignDomainAddress": (_el: _Element): void => { foreignDomainAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
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
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.lifetime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.lifetime, $.BER)),
            /* IF_ABSENT  */ ((value.homeAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.homeAddress, $.BER)),
            /* IF_ABSENT  */ ((value.careOfAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.careOfAddress, $.BER)),
            /* IF_ABSENT  */ ((value.homeAgentAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.homeAgentAddress, $.BER)),
            /* IF_ABSENT  */ ((value.code === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.code, $.BER)),
            /* IF_ABSENT  */ ((value.foreignDomainAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.foreignDomainAddress, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EPS_MIP_SpecificParameters(value, elGetter);
}


/* eslint-enable */

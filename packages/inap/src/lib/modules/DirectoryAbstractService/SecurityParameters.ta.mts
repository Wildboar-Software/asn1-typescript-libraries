/* eslint-disable */
import {
    BIT_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CertificationPath, _decode_CertificationPath, _encode_CertificationPath } from "../AuthenticationFramework/CertificationPath.ta.mjs";
// export { CertificationPath, _decode_CertificationPath, _encode_CertificationPath } from "../AuthenticationFramework/CertificationPath.ta.mjs";
import { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
// export { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
import { Time, _decode_Time, _encode_Time } from "../DirectoryAbstractService/Time.ta.mjs";
// export { Time, _decode_Time, _encode_Time } from "../DirectoryAbstractService/Time.ta.mjs";
import { ProtectionRequest, _decode_ProtectionRequest, _encode_ProtectionRequest } from "../DirectoryAbstractService/ProtectionRequest.ta.mjs";
// export { ProtectionRequest, ProtectionRequest_none /* IMPORTED_LONG_NAMED_INTEGER */, ProtectionRequest_signed /* IMPORTED_LONG_NAMED_INTEGER */, ProtectionRequest_encrypted /* IMPORTED_LONG_NAMED_INTEGER */, ProtectionRequest_signed_encrypted /* IMPORTED_LONG_NAMED_INTEGER */, _decode_ProtectionRequest, _encode_ProtectionRequest } from "../DirectoryAbstractService/ProtectionRequest.ta.mjs";
import { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { AttributeCertificationPath, _decode_AttributeCertificationPath, _encode_AttributeCertificationPath } from "../AuthenticationFramework/AttributeCertificationPath.ta.mjs";
// export { AttributeCertificationPath, _decode_AttributeCertificationPath, _encode_AttributeCertificationPath } from "../AuthenticationFramework/AttributeCertificationPath.ta.mjs";
import { ErrorProtectionRequest, _decode_ErrorProtectionRequest, _encode_ErrorProtectionRequest } from "../DirectoryAbstractService/ErrorProtectionRequest.ta.mjs";
// export { ErrorProtectionRequest, ErrorProtectionRequest_none /* IMPORTED_LONG_NAMED_INTEGER */, ErrorProtectionRequest_signed /* IMPORTED_LONG_NAMED_INTEGER */, ErrorProtectionRequest_encrypted /* IMPORTED_LONG_NAMED_INTEGER */, ErrorProtectionRequest_signed_encrypted /* IMPORTED_LONG_NAMED_INTEGER */, _decode_ErrorProtectionRequest, _encode_ErrorProtectionRequest } from "../DirectoryAbstractService/ErrorProtectionRequest.ta.mjs";


/**
 * @summary SecurityParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityParameters ::= SET {
 *   certification-path          [0]  CertificationPath OPTIONAL,
 *   name                        [1]  DistinguishedName OPTIONAL,
 *   time                        [2]  Time OPTIONAL,
 *   random                      [3]  BIT STRING OPTIONAL,
 *   target                      [4]  ProtectionRequest OPTIONAL,
 *   response                    [5]  BIT STRING OPTIONAL,
 *   operationCode               [6]  Code OPTIONAL,
 *   attributeCertificationPath  [7]  AttributeCertificationPath OPTIONAL,
 *   errorProtection             [8]  ErrorProtectionRequest OPTIONAL,
 *   errorCode                   [9]  Code OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SecurityParameters {
    /**
     * @summary `certification_path`.
     * @public
     * @readonly
     */
    readonly certification_path: OPTIONAL<CertificationPath>;
    /**
     * @summary `name`.
     * @public
     * @readonly
     */
    readonly name: OPTIONAL<DistinguishedName>;
    /**
     * @summary `time`.
     * @public
     * @readonly
     */
    readonly time: OPTIONAL<Time>;
    /**
     * @summary `random`.
     * @public
     * @readonly
     */
    readonly random: OPTIONAL<BIT_STRING>;
    /**
     * @summary `target`.
     * @public
     * @readonly
     */
    readonly target: OPTIONAL<ProtectionRequest>;
    /**
     * @summary `response`.
     * @public
     * @readonly
     */
    readonly response: OPTIONAL<BIT_STRING>;
    /**
     * @summary `operationCode`.
     * @public
     * @readonly
     */
    readonly operationCode: OPTIONAL<Code>;
    /**
     * @summary `attributeCertificationPath`.
     * @public
     * @readonly
     */
    readonly attributeCertificationPath: OPTIONAL<AttributeCertificationPath>;
    /**
     * @summary `errorProtection`.
     * @public
     * @readonly
     */
    readonly errorProtection: OPTIONAL<ErrorProtectionRequest>;
    /**
     * @summary `errorCode`.
     * @public
     * @readonly
     */
    readonly errorCode: OPTIONAL<Code>;

    constructor (
        certification_path: OPTIONAL<CertificationPath>,
        name: OPTIONAL<DistinguishedName>,
        time: OPTIONAL<Time>,
        random: OPTIONAL<BIT_STRING>,
        target: OPTIONAL<ProtectionRequest>,
        response: OPTIONAL<BIT_STRING>,
        operationCode: OPTIONAL<Code>,
        attributeCertificationPath: OPTIONAL<AttributeCertificationPath>,
        errorProtection: OPTIONAL<ErrorProtectionRequest>,
        errorCode: OPTIONAL<Code>
    ) {
        this.certification_path = certification_path;
        this.name = name;
        this.time = time;
        this.random = random;
        this.target = target;
        this.response = response;
        this.operationCode = operationCode;
        this.attributeCertificationPath = attributeCertificationPath;
        this.errorProtection = errorProtection;
        this.errorCode = errorCode;
    }

    /**
     * @summary Restructures an object into a SecurityParameters
     * @description
     * 
     * This takes an `object` and converts it to a `SecurityParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SecurityParameters`.
     * @returns {SecurityParameters}
     */
    public static _from_object (_o: { [_K in keyof (SecurityParameters)]: (SecurityParameters)[_K] }): SecurityParameters {
        return new SecurityParameters(_o.certification_path, _o.name, _o.time, _o.random, _o.target, _o.response, _o.operationCode, _o.attributeCertificationPath, _o.errorProtection, _o.errorCode);
    }


}

/**
 * @summary The Leading Root Component Types of SecurityParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SecurityParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("certification-path", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("name", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("time", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("random", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("target", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("response", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("operationCode", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("attributeCertificationPath", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("errorProtection", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("errorCode", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of SecurityParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SecurityParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SecurityParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SecurityParameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SecurityParameters: $.ASN1Decoder<SecurityParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SecurityParameters (el: _Element): SecurityParameters {
    if (!_cached_decoder_for_SecurityParameters) { _cached_decoder_for_SecurityParameters = function (el: _Element): SecurityParameters {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let certification_path: OPTIONAL<CertificationPath>;
    let name: OPTIONAL<DistinguishedName>;
    let time: OPTIONAL<Time>;
    let random: OPTIONAL<BIT_STRING>;
    let target: OPTIONAL<ProtectionRequest>;
    let response: OPTIONAL<BIT_STRING>;
    let operationCode: OPTIONAL<Code>;
    let attributeCertificationPath: OPTIONAL<AttributeCertificationPath>;
    let errorProtection: OPTIONAL<ErrorProtectionRequest>;
    let errorCode: OPTIONAL<Code>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "certification-path": (_el: _Element): void => { certification_path = $._decode_explicit<CertificationPath>(() => _decode_CertificationPath)(_el); },
        "name": (_el: _Element): void => { name = $._decode_explicit<DistinguishedName>(() => _decode_DistinguishedName)(_el); },
        "time": (_el: _Element): void => { time = $._decode_explicit<Time>(() => _decode_Time)(_el); },
        "random": (_el: _Element): void => { random = $._decode_explicit<BIT_STRING>(() => $._decodeBitString)(_el); },
        "target": (_el: _Element): void => { target = $._decode_explicit<ProtectionRequest>(() => _decode_ProtectionRequest)(_el); },
        "response": (_el: _Element): void => { response = $._decode_explicit<BIT_STRING>(() => $._decodeBitString)(_el); },
        "operationCode": (_el: _Element): void => { operationCode = $._decode_explicit<Code>(() => _decode_Code)(_el); },
        "attributeCertificationPath": (_el: _Element): void => { attributeCertificationPath = $._decode_explicit<AttributeCertificationPath>(() => _decode_AttributeCertificationPath)(_el); },
        "errorProtection": (_el: _Element): void => { errorProtection = $._decode_explicit<ErrorProtectionRequest>(() => _decode_ErrorProtectionRequest)(_el); },
        "errorCode": (_el: _Element): void => { errorCode = $._decode_explicit<Code>(() => _decode_Code)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_SecurityParameters,
        _extension_additions_list_spec_for_SecurityParameters,
        _root_component_type_list_2_spec_for_SecurityParameters,
        undefined,
    );
    return new SecurityParameters( /* SET_CONSTRUCTOR_CALL */
        certification_path,
        name,
        time,
        random,
        target,
        response,
        operationCode,
        attributeCertificationPath,
        errorProtection,
        errorCode
    );
}; }
    return _cached_decoder_for_SecurityParameters(el);
}

let _cached_encoder_for_SecurityParameters: $.ASN1Encoder<SecurityParameters> | null = null;

/**
 * @summary Encodes a(n) SecurityParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityParameters, encoded as an ASN.1 Element.
 */
export
function _encode_SecurityParameters (value: SecurityParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SecurityParameters) { _cached_encoder_for_SecurityParameters = function (value: SecurityParameters, elGetter: $.ASN1Encoder<SecurityParameters>): _Element {
    const _components: _Element[] = [];
    if (value.certification_path !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_CertificationPath, $.BER)(value.certification_path, $.BER));
    }
    if (value.name !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_DistinguishedName, $.BER)(value.name, $.BER));
    }
    if (value.time !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_Time, $.BER)(value.time, $.BER));
    }
    if (value.random !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => $._encodeBitString, $.BER)(value.random, $.BER));
    }
    if (value.target !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_ProtectionRequest, $.BER)(value.target, $.BER));
    }
    if (value.response !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => $._encodeBitString, $.BER)(value.response, $.BER));
    }
    if (value.operationCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 6, () => _encode_Code, $.BER)(value.operationCode, $.BER));
    }
    if (value.attributeCertificationPath !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 7, () => _encode_AttributeCertificationPath, $.BER)(value.attributeCertificationPath, $.BER));
    }
    if (value.errorProtection !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 8, () => _encode_ErrorProtectionRequest, $.BER)(value.errorProtection, $.BER));
    }
    if (value.errorCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 9, () => _encode_Code, $.BER)(value.errorCode, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_SecurityParameters(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ScfAddress, _decode_ScfAddress, _encode_ScfAddress } from "../IN-SCF-SCF-datatypes/ScfAddress.ta.mjs";
// export { ScfAddress, _decode_ScfAddress, _encode_ScfAddress } from "../IN-SCF-SCF-datatypes/ScfAddress.ta.mjs";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../DirectoryAbstractService/Credentials.ta.mjs";
// export { Credentials, _decode_Credentials, _encode_Credentials } from "../DirectoryAbstractService/Credentials.ta.mjs";


/**
 * @summary SCFBindResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCFBindResult ::= SEQUENCE {
 *   respondingScfAddress  [0]  ScfAddress OPTIONAL,
 *   -- absent in a chained operation request which crosses
 *   -- an international internetworking boundary
 *   returnedCredentials   [1]  Credentials OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SCFBindResult {
    /**
     * @summary `respondingScfAddress`.
     * @public
     * @readonly
     */
    readonly respondingScfAddress: OPTIONAL<ScfAddress>;
    /**
     * @summary `returnedCredentials`.
     * @public
     * @readonly
     */
    readonly returnedCredentials: OPTIONAL<Credentials>;

    constructor (
        respondingScfAddress: OPTIONAL<ScfAddress>,
        returnedCredentials: OPTIONAL<Credentials>
    ) {
        this.respondingScfAddress = respondingScfAddress;
        this.returnedCredentials = returnedCredentials;
    }

    /**
     * @summary Restructures an object into a SCFBindResult
     * @description
     * 
     * This takes an `object` and converts it to a `SCFBindResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SCFBindResult`.
     * @returns {SCFBindResult}
     */
    public static _from_object (_o: { [_K in keyof (SCFBindResult)]: (SCFBindResult)[_K] }): SCFBindResult {
        return new SCFBindResult(_o.respondingScfAddress, _o.returnedCredentials);
    }


}

/**
 * @summary The Leading Root Component Types of SCFBindResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SCFBindResult: $.ComponentSpec[] = [
    new $.ComponentSpec("respondingScfAddress", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("returnedCredentials", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of SCFBindResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SCFBindResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SCFBindResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SCFBindResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SCFBindResult: $.ASN1Decoder<SCFBindResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCFBindResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCFBindResult (el: _Element): SCFBindResult {
    if (!_cached_decoder_for_SCFBindResult) { _cached_decoder_for_SCFBindResult = function (el: _Element): SCFBindResult {
    let respondingScfAddress: OPTIONAL<ScfAddress>;
    let returnedCredentials: OPTIONAL<Credentials>;
    const callbacks: $.DecodingMap = {
        "respondingScfAddress": (_el: _Element): void => { respondingScfAddress = $._decode_implicit<ScfAddress>(() => _decode_ScfAddress)(_el); },
        "returnedCredentials": (_el: _Element): void => { returnedCredentials = $._decode_explicit<Credentials>(() => _decode_Credentials)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SCFBindResult,
        _extension_additions_list_spec_for_SCFBindResult,
        _root_component_type_list_2_spec_for_SCFBindResult,
        undefined,
    );
    return new SCFBindResult(
        respondingScfAddress,
        returnedCredentials
    );
}; }
    return _cached_decoder_for_SCFBindResult(el);
}

let _cached_encoder_for_SCFBindResult: $.ASN1Encoder<SCFBindResult> | null = null;

/**
 * @summary Encodes a(n) SCFBindResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCFBindResult, encoded as an ASN.1 Element.
 */
export
function _encode_SCFBindResult (value: SCFBindResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCFBindResult) { _cached_encoder_for_SCFBindResult = function (value: SCFBindResult, elGetter: $.ASN1Encoder<SCFBindResult>): _Element {
    const _components: _Element[] = [];
    if (value.respondingScfAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_ScfAddress, $.BER)(value.respondingScfAddress, $.BER));
    }
    if (value.returnedCredentials !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_Credentials, $.BER)(value.returnedCredentials, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SCFBindResult(value, elGetter);
}


/* eslint-enable */

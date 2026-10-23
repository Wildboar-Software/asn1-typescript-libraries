/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TSCheckErrorId, _decode_TSCheckErrorId, _encode_TSCheckErrorId } from "../CSChargingDataTypes/TSCheckErrorId.ta.mjs";


/**
 * @summary TSCheckError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TSCheckError ::= SEQUENCE {
 *    errorId    [0] TSCheckErrorId,
 *    fail       ANY DEFINED BY errorId  OPTIONAL}
 * ```
 * 
 * @class
 */
export
class TSCheckError {
    /**
     * @summary `errorId`.
     * @public
     * @readonly
     */
    readonly errorId: TSCheckErrorId;
    /**
     * @summary `fail`.
     * @public
     * @readonly
     */
    readonly fail: OPTIONAL<_Element>;

    constructor (
        errorId: TSCheckErrorId,
        fail: OPTIONAL<_Element>
    ) {
        this.errorId = errorId;
        this.fail = fail;
    }

    /**
     * @summary Restructures an object into a TSCheckError
     * @description
     *
     * This takes an `object` and converts it to a `TSCheckError`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TSCheckError`.
     * @returns {TSCheckError}
     */
    public static _from_object (_o: { [_K in keyof (TSCheckError)]: (TSCheckError)[_K] }): TSCheckError {
        return new TSCheckError(_o.errorId, _o.fail);
    }


}

/**
 * @summary The Leading Root Component Types of TSCheckError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TSCheckError: $.ComponentSpec[] = [
    new $.ComponentSpec("errorId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("fail", true, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of TSCheckError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TSCheckError: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TSCheckError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _extension_additions_list_spec_for_TSCheckError: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TSCheckError: $.ASN1Decoder<TSCheckError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TSCheckError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TSCheckError (el: _Element): TSCheckError {
    if (!_cached_decoder_for_TSCheckError) { _cached_decoder_for_TSCheckError = function (el: _Element): TSCheckError {
    let errorId!: TSCheckErrorId;
    let fail: OPTIONAL<_Element>;
    const callbacks: $.DecodingMap = {
        "errorId": (_el: _Element): void => { errorId = $._decode_explicit<TSCheckErrorId>(() => _decode_TSCheckErrorId)(_el); },
        "fail": (_el: _Element): void => { fail = $._decodeAny(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TSCheckError,
        _extension_additions_list_spec_for_TSCheckError,
        _root_component_type_list_2_spec_for_TSCheckError,
        undefined,
    );
    return new TSCheckError(
        errorId,
        fail
    );
}; }
    return _cached_decoder_for_TSCheckError(el);
}

let _cached_encoder_for_TSCheckError: $.ASN1Encoder<TSCheckError> | null = null;

/**
 * @summary Encodes a(n) TSCheckError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TSCheckError, encoded as an ASN.1 Element.
 */
export
function _encode_TSCheckError (value: TSCheckError, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TSCheckError) { _cached_encoder_for_TSCheckError = function (value: TSCheckError, _elGetter: $.ASN1Encoder<TSCheckError>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_TSCheckErrorId, $.BER)(value.errorId, $.BER));
    if (value.fail !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encodeAny(value.fail, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TSCheckError(value, elGetter);
}


/* eslint-enable */

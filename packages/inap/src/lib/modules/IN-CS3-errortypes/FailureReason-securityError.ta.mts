/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SecurityProblem, _decode_SecurityProblem, _encode_SecurityProblem } from "../DirectoryAbstractService/SecurityProblem.ta.mjs";
// export { SecurityProblem, SecurityProblem_inappropriateAuthentication /* IMPORTED_LONG_NAMED_INTEGER */, inappropriateAuthentication /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_invalidCredentials /* IMPORTED_LONG_NAMED_INTEGER */, invalidCredentials /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_insufficientAccessRights /* IMPORTED_LONG_NAMED_INTEGER */, insufficientAccessRights /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_invalidSignature /* IMPORTED_LONG_NAMED_INTEGER */, invalidSignature /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_protectionRequired /* IMPORTED_LONG_NAMED_INTEGER */, protectionRequired /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_noInformation /* IMPORTED_LONG_NAMED_INTEGER */, noInformation /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_blockedCredentials /* IMPORTED_LONG_NAMED_INTEGER */, blockedCredentials /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_invalidQOPMatch /* IMPORTED_LONG_NAMED_INTEGER */, invalidQOPMatch /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_spkmError /* IMPORTED_LONG_NAMED_INTEGER */, spkmError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_SecurityProblem, _encode_SecurityProblem } from "../DirectoryAbstractService/SecurityProblem.ta.mjs";
import { SPKM_ERROR, _decode_SPKM_ERROR, _encode_SPKM_ERROR } from "../SpkmGssTokens/SPKM-ERROR.ta.mjs";
// export { SPKM_ERROR, _decode_SPKM_ERROR, _encode_SPKM_ERROR } from "../SpkmGssTokens/SPKM-ERROR.ta.mjs";


/**
 * @summary FailureReason_securityError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FailureReason-securityError ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class FailureReason_securityError {
    /**
     * @summary `problem`.
     * @public
     * @readonly
     */
    readonly problem: SecurityProblem;
    /**
     * @summary `spkmInfo`.
     * @public
     * @readonly
     */
    readonly spkmInfo: SPKM_ERROR;

    constructor (
        problem: SecurityProblem,
        spkmInfo: SPKM_ERROR
    ) {
        this.problem = problem;
        this.spkmInfo = spkmInfo;
    }

    /**
     * @summary Restructures an object into a FailureReason_securityError
     * @description
     * 
     * This takes an `object` and converts it to a `FailureReason_securityError`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FailureReason_securityError`.
     * @returns {FailureReason_securityError}
     */
    public static _from_object (_o: { [_K in keyof (FailureReason_securityError)]: (FailureReason_securityError)[_K] }): FailureReason_securityError {
        return new FailureReason_securityError(_o.problem, _o.spkmInfo);
    }


}

/**
 * @summary The Leading Root Component Types of FailureReason_securityError
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FailureReason_securityError: $.ComponentSpec[] = [
    new $.ComponentSpec("problem", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("spkmInfo", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of FailureReason_securityError
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FailureReason_securityError: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FailureReason_securityError
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FailureReason_securityError: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FailureReason_securityError: $.ASN1Decoder<FailureReason_securityError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FailureReason_securityError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FailureReason_securityError (el: _Element): FailureReason_securityError {
    if (!_cached_decoder_for_FailureReason_securityError) { _cached_decoder_for_FailureReason_securityError = function (el: _Element): FailureReason_securityError {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let problem!: SecurityProblem;
    let spkmInfo!: SPKM_ERROR;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "problem": (_el: _Element): void => { problem = $._decode_implicit<SecurityProblem>(() => _decode_SecurityProblem)(_el); },
        "spkmInfo": (_el: _Element): void => { spkmInfo = $._decode_implicit<SPKM_ERROR>(() => _decode_SPKM_ERROR)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_FailureReason_securityError,
        _extension_additions_list_spec_for_FailureReason_securityError,
        _root_component_type_list_2_spec_for_FailureReason_securityError,
        undefined,
    );
    return new FailureReason_securityError( /* SET_CONSTRUCTOR_CALL */
        problem,
        spkmInfo
    );
}; }
    return _cached_decoder_for_FailureReason_securityError(el);
}

let _cached_encoder_for_FailureReason_securityError: $.ASN1Encoder<FailureReason_securityError> | null = null;

/**
 * @summary Encodes a(n) FailureReason_securityError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FailureReason_securityError, encoded as an ASN.1 Element.
 */
export
function _encode_FailureReason_securityError (value: FailureReason_securityError, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FailureReason_securityError) { _cached_encoder_for_FailureReason_securityError = function (value: FailureReason_securityError, elGetter: $.ASN1Encoder<FailureReason_securityError>): _Element {
    return $._encodeSet([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_SecurityProblem, $.BER)(value.problem, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SPKM_ERROR, $.BER)(value.spkmInfo, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FailureReason_securityError(value, elGetter);
}


/* eslint-enable */

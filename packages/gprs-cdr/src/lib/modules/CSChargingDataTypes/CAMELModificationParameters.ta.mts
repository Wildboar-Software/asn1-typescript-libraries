/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CAMELModificationParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CAMELModificationParameters ::= SET {
 *    callingPartyNumber          [0] IMPLICIT OCTET STRING OPTIONAL,
 *    callingPartyCategory        [1] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    originalCalledPartyNumber   [2] IMPLICIT OCTET STRING OPTIONAL,
 *    genericNumbers              [3] IMPLICIT SET  OF
 *       OCTET STRING OPTIONAL,
 *    redirectingPartyNumber      [4] IMPLICIT OCTET STRING OPTIONAL,
 *    redirectionCounter          [5] IMPLICIT INTEGER ( 1 .. 5 ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class CAMELModificationParameters {
    /**
     * @summary `callingPartyNumber`.
     * @public
     * @readonly
     */
    readonly callingPartyNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `callingPartyCategory`.
     * @public
     * @readonly
     */
    readonly callingPartyCategory: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `originalCalledPartyNumber`.
     * @public
     * @readonly
     */
    readonly originalCalledPartyNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `genericNumbers`.
     * @public
     * @readonly
     */
    readonly genericNumbers: OPTIONAL<OCTET_STRING[]>;
    /**
     * @summary `redirectingPartyNumber`.
     * @public
     * @readonly
     */
    readonly redirectingPartyNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `redirectionCounter`.
     * @public
     * @readonly
     */
    readonly redirectionCounter: OPTIONAL<INTEGER>;

    constructor (
        callingPartyNumber: OPTIONAL<OCTET_STRING>,
        callingPartyCategory: OPTIONAL<OCTET_STRING>,
        originalCalledPartyNumber: OPTIONAL<OCTET_STRING>,
        genericNumbers: OPTIONAL<OCTET_STRING[]>,
        redirectingPartyNumber: OPTIONAL<OCTET_STRING>,
        redirectionCounter: OPTIONAL<INTEGER>
    ) {
        this.callingPartyNumber = callingPartyNumber;
        this.callingPartyCategory = callingPartyCategory;
        this.originalCalledPartyNumber = originalCalledPartyNumber;
        this.genericNumbers = genericNumbers;
        this.redirectingPartyNumber = redirectingPartyNumber;
        this.redirectionCounter = redirectionCounter;
    
        if (this.callingPartyCategory !== undefined && (this.callingPartyCategory.length !== 1)) {
            throw new ASN1SizeError("CAMELModificationParameters.callingPartyCategory violates SIZE constraint");
        }
        if (this.redirectionCounter !== undefined && (this.redirectionCounter < 1 || this.redirectionCounter > 5)) {
            throw new ASN1OverflowError("CAMELModificationParameters.redirectionCounter violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a CAMELModificationParameters
     * @description
     * 
     * This takes an `object` and converts it to a `CAMELModificationParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CAMELModificationParameters`.
     * @returns {CAMELModificationParameters}
     */
    public static _from_object (_o: { [_K in keyof (CAMELModificationParameters)]: (CAMELModificationParameters)[_K] }): CAMELModificationParameters {
        return new CAMELModificationParameters(_o.callingPartyNumber, _o.callingPartyCategory, _o.originalCalledPartyNumber, _o.genericNumbers, _o.redirectingPartyNumber, _o.redirectionCounter);
    }


}

/**
 * @summary The Leading Root Component Types of CAMELModificationParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CAMELModificationParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("callingPartyNumber", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("callingPartyCategory", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("originalCalledPartyNumber", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("genericNumbers", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("redirectingPartyNumber", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("redirectionCounter", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of CAMELModificationParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CAMELModificationParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CAMELModificationParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CAMELModificationParameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CAMELModificationParameters: $.ASN1Decoder<CAMELModificationParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CAMELModificationParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CAMELModificationParameters (el: _Element): CAMELModificationParameters {
    if (!_cached_decoder_for_CAMELModificationParameters) { _cached_decoder_for_CAMELModificationParameters = function (el: _Element): CAMELModificationParameters {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let callingPartyNumber: OPTIONAL<OCTET_STRING>;
    let callingPartyCategory: OPTIONAL<OCTET_STRING>;
    let originalCalledPartyNumber: OPTIONAL<OCTET_STRING>;
    let genericNumbers: OPTIONAL<OCTET_STRING[]>;
    let redirectingPartyNumber: OPTIONAL<OCTET_STRING>;
    let redirectionCounter: OPTIONAL<INTEGER>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "callingPartyNumber": (_el: _Element): void => { callingPartyNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "callingPartyCategory": (_el: _Element): void => { callingPartyCategory = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "originalCalledPartyNumber": (_el: _Element): void => { originalCalledPartyNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "genericNumbers": (_el: _Element): void => { genericNumbers = $._decode_implicit<OCTET_STRING[]>(() => $._decodeSetOf<OCTET_STRING>(() => $._decodeOctetString))(_el); },
        "redirectingPartyNumber": (_el: _Element): void => { redirectingPartyNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "redirectionCounter": (_el: _Element): void => { redirectionCounter = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_CAMELModificationParameters,
        _extension_additions_list_spec_for_CAMELModificationParameters,
        _root_component_type_list_2_spec_for_CAMELModificationParameters,
        undefined,
    );
    return new CAMELModificationParameters( /* SET_CONSTRUCTOR_CALL */
        callingPartyNumber,
        callingPartyCategory,
        originalCalledPartyNumber,
        genericNumbers,
        redirectingPartyNumber,
        redirectionCounter
    );
}; }
    return _cached_decoder_for_CAMELModificationParameters(el);
}

let _cached_encoder_for_CAMELModificationParameters: $.ASN1Encoder<CAMELModificationParameters> | null = null;

/**
 * @summary Encodes a(n) CAMELModificationParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CAMELModificationParameters, encoded as an ASN.1 Element.
 */
export
function _encode_CAMELModificationParameters (value: CAMELModificationParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CAMELModificationParameters) { _cached_encoder_for_CAMELModificationParameters = function (value: CAMELModificationParameters, _elGetter: $.ASN1Encoder<CAMELModificationParameters>): _Element {
    const _components: _Element[] = [];
    if (value.callingPartyNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.callingPartyNumber, $.BER));
    }
    if (value.callingPartyCategory !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.callingPartyCategory, $.BER));
    }
    if (value.originalCalledPartyNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.originalCalledPartyNumber, $.BER));
    }
    if (value.genericNumbers !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSetOf<OCTET_STRING>(() => $._encodeOctetString, $.BER), $.BER)(value.genericNumbers, $.BER));
    }
    if (value.redirectingPartyNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.redirectingPartyNumber, $.BER));
    }
    if (value.redirectionCounter !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.redirectionCounter, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_CAMELModificationParameters(value, elGetter);
}


/* eslint-enable */

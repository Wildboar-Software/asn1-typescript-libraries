/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ISUPCause
 * @description
 *
 * Why the call was released, when the MGCF releases the session via ISUP
 * (clause 6.1.3.7 and clause 6.3.1.1). TS 32.260 does not define the
 * location, value, and diagnostics components.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.1.3.7.
 *
 * When session is released via ISUP, this field indicates the reason the
 * call was released.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.21C.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ISUPCause ::= SEQUENCE {
 *    iSUPCauseLocation      [0] IMPLICIT INTEGER OPTIONAL,
 *    iSUPCauseValue         [1] IMPLICIT INTEGER OPTIONAL,
 *    iSUPCauseDiagnostics   [2] IMPLICIT OCTET STRING OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ISUPCause {
    /**
     * @summary `iSUPCauseLocation`.
     * @description
     *
     * Location component of the cause, when the MGCF releases the session via
     * ISUP (clause 6.1.3.7). TS 32.260 does not define the location, value,
     * and diagnostics split.
     *
     * @public
     * @readonly
     */
    readonly iSUPCauseLocation: OPTIONAL<INTEGER>;
    /**
     * @summary `iSUPCauseValue`.
     * @description
     *
     * Cause value, when the MGCF releases the session via ISUP (clause
     * 6.1.3.7). TS 32.260 does not define this component..
     *
     * @public
     * @readonly
     */
    readonly iSUPCauseValue: OPTIONAL<INTEGER>;
    /**
     * @summary `iSUPCauseDiagnostics`.
     * @description
     *
     * Diagnostics, when the MGCF releases the session via ISUP (clause
     * 6.1.3.7). TS 32.260 does not define this component..
     *
     * @public
     * @readonly
     */
    readonly iSUPCauseDiagnostics: OPTIONAL<OCTET_STRING>;

    constructor (
        iSUPCauseLocation?: OPTIONAL<INTEGER>,
        iSUPCauseValue?: OPTIONAL<INTEGER>,
        iSUPCauseDiagnostics?: OPTIONAL<OCTET_STRING>
    ) {
        this.iSUPCauseLocation = iSUPCauseLocation;
        this.iSUPCauseValue = iSUPCauseValue;
        this.iSUPCauseDiagnostics = iSUPCauseDiagnostics;
    }

    /**
     * @summary Restructures an object into a ISUPCause
     * @description
     * 
     * This takes an `object` and converts it to a `ISUPCause`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ISUPCause`.
     * @returns {ISUPCause}
     */
    public static _from_object (_o: { [_K in keyof (ISUPCause)]: (ISUPCause)[_K] }): ISUPCause {
        return new ISUPCause(_o.iSUPCauseLocation, _o.iSUPCauseValue, _o.iSUPCauseDiagnostics);
    }


}

/**
 * @summary The Leading Root Component Types of ISUPCause
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ISUPCause: $.ComponentSpec[] = [
    new $.ComponentSpec("iSUPCauseLocation", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("iSUPCauseValue", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iSUPCauseDiagnostics", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ISUPCause
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ISUPCause: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ISUPCause
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ISUPCause: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ISUPCause: $.ASN1Decoder<ISUPCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ISUPCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ISUPCause (el: _Element): ISUPCause {
    if (!_cached_decoder_for_ISUPCause) { _cached_decoder_for_ISUPCause = function (el: _Element): ISUPCause {
    let iSUPCauseLocation: OPTIONAL<INTEGER>;
    let iSUPCauseValue: OPTIONAL<INTEGER>;
    let iSUPCauseDiagnostics: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "iSUPCauseLocation": (_el: _Element): void => { iSUPCauseLocation = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "iSUPCauseValue": (_el: _Element): void => { iSUPCauseValue = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "iSUPCauseDiagnostics": (_el: _Element): void => { iSUPCauseDiagnostics = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ISUPCause,
        _extension_additions_list_spec_for_ISUPCause,
        _root_component_type_list_2_spec_for_ISUPCause,
        undefined,
    );
    return new ISUPCause(
        iSUPCauseLocation,
        iSUPCauseValue,
        iSUPCauseDiagnostics
    );
}; }
    return _cached_decoder_for_ISUPCause(el);
}

let _cached_encoder_for_ISUPCause: $.ASN1Encoder<ISUPCause> | null = null;

/**
 * @summary Encodes a(n) ISUPCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ISUPCause, encoded as an ASN.1 Element.
 */
export
function _encode_ISUPCause (value: ISUPCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ISUPCause) { _cached_encoder_for_ISUPCause = function (value: ISUPCause, _elGetter: $.ASN1Encoder<ISUPCause>): _Element {
    const _components: _Element[] = [];
    if (value.iSUPCauseLocation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.iSUPCauseLocation, $.BER));
    }
    if (value.iSUPCauseValue !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.iSUPCauseValue, $.BER));
    }
    if (value.iSUPCauseDiagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.iSUPCauseDiagnostics, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ISUPCause(value, elGetter);
}


/* eslint-enable */

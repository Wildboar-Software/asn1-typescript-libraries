/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING,
    type OPTIONAL,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SuppServiceUsed
 * @description
 *
 * One supplementary service invoked as a result of the connection. The list
 * is present when one or more supplementary services were invoked.
 * Call-related invocation may be recorded here, in an `SSActionRecord`, or
 * in both, as the billing domain configures (clause 5.1.3.3).
 *
 * On a multi-party call, each MOC or MTC of the conference originator
 * includes the multi-party service code. Call hold may be recorded here as
 * well. The time the call is held is not recorded (clause 5.1.3.5). TS
 * 32.250 does not define the coding of `ssCode`.
 *
 * 3GPP TS 32.250 V19.0.0 clauses 5.1.3.3, 5.1.3.5, and 6.1.3.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SuppServiceUsed ::= SEQUENCE {
 *    ssCode     [0] IMPLICIT OCTET STRING ( SIZE( 1 ) ),
 *    ssTime     [1] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class SuppServiceUsed {
    /**
     * @summary `ssCode`.
     * @description
     *
     * Supplementary service invoked for this connection. TS 32.250 does not
     * define the octet coding. On a conference, the originator's call records
     * include the multi-party service code. 3GPP TS 32.250 V19.0.0 clauses
     * 5.1.3.5 and 6.1.3.1.
     *
     * @public
     * @readonly
     */
    readonly ssCode: OCTET_STRING;
    /**
     * @summary `ssTime`.
     * @description
     *
     * Time associated with this supplementary-service invocation. TS 32.250
     * does not say when the timestamp is omitted. Call-hold duration is not
     * recorded. 3GPP TS 32.250 V19.0.0 clause 5.1.3.5.
     *
     * @public
     * @readonly
     */
    readonly ssTime: OPTIONAL<OCTET_STRING>;

    constructor (
        ssCode: OCTET_STRING,
        ssTime?: OPTIONAL<OCTET_STRING>
    ) {
        this.ssCode = ssCode;
        this.ssTime = ssTime;
    
        if ((this.ssCode.length !== 1)) {
            throw new ASN1SizeError("SuppServiceUsed.ssCode violates SIZE constraint");
        }
        if (this.ssTime !== undefined && (this.ssTime.length !== 9)) {
            throw new ASN1SizeError("SuppServiceUsed.ssTime violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a SuppServiceUsed
     * @description
     *
     * This takes an `object` and converts it to a `SuppServiceUsed`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SuppServiceUsed`.
     * @returns {SuppServiceUsed}
     */
    public static _from_object (_o: { [_K in keyof (SuppServiceUsed)]: (SuppServiceUsed)[_K] }): SuppServiceUsed {
        return new SuppServiceUsed(_o.ssCode, _o.ssTime);
    }


}

/**
 * @summary The Leading Root Component Types of SuppServiceUsed
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SuppServiceUsed: $.ComponentSpec[] = [
    new $.ComponentSpec("ssCode", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("ssTime", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of SuppServiceUsed
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SuppServiceUsed: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SuppServiceUsed
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _extension_additions_list_spec_for_SuppServiceUsed: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SuppServiceUsed: $.ASN1Decoder<SuppServiceUsed> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SuppServiceUsed
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SuppServiceUsed (el: _Element): SuppServiceUsed {
    if (!_cached_decoder_for_SuppServiceUsed) { _cached_decoder_for_SuppServiceUsed = function (el: _Element): SuppServiceUsed {
    let ssCode!: OCTET_STRING;
    let ssTime: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "ssCode": (_el: _Element): void => { ssCode = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "ssTime": (_el: _Element): void => { ssTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SuppServiceUsed,
        _extension_additions_list_spec_for_SuppServiceUsed,
        _root_component_type_list_2_spec_for_SuppServiceUsed,
        undefined,
    );
    return new SuppServiceUsed(
        ssCode,
        ssTime
    );
}; }
    return _cached_decoder_for_SuppServiceUsed(el);
}

let _cached_encoder_for_SuppServiceUsed: $.ASN1Encoder<SuppServiceUsed> | null = null;

/**
 * @summary Encodes a(n) SuppServiceUsed into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SuppServiceUsed, encoded as an ASN.1 Element.
 */
export
function _encode_SuppServiceUsed (value: SuppServiceUsed, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SuppServiceUsed) { _cached_encoder_for_SuppServiceUsed = function (value: SuppServiceUsed, _elGetter: $.ASN1Encoder<SuppServiceUsed>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.ssCode, $.BER));
    if (value.ssTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.ssTime, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SuppServiceUsed(value, elGetter);
}


/* eslint-enable */

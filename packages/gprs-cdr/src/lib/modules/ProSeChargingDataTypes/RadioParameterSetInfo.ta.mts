/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RadioParameterSetInfo
 * @description
 *
 * One radio parameter set configured in the UE for ProSe Direct Communication,
 * and the time it became active. The parameters are those defined in TS 24.333.
 * A set that becomes active is added to every open group PF-DC-CDR when the
 * ProSe Function receives it in a usage information report. TS 32.277 does not
 * define the layout of `params`.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.3, 5.2.3.1.2, 6.1.3.4, and 6.3.1.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RadioParameterSetInfo ::= SEQUENCE {
 *    timeStamp   [0] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    params      [1] IMPLICIT OCTET STRING}
 * ```
 * 
 * @class
 */
export
class RadioParameterSetInfo {
    /**
     * @summary `timeStamp`.
     * @description
     *
     * Time this radio parameter set became active on the UE.
     *
     * 3GPP TS 32.277 V19.2.0 clause 6.1.3.4.
     *
     * @public
     * @readonly
     */
    readonly timeStamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `params`.
     * @description
     *
     * The configured radio parameter set. TS 32.277 does not define this octet
     * string; the parameters are specified in TS 24.333.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.3 and 6.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly params: OCTET_STRING;

    constructor (
        timeStamp: OPTIONAL<OCTET_STRING>,
        params: OCTET_STRING
    ) {
        this.timeStamp = timeStamp;
        this.params = params;
    
        if (this.timeStamp !== undefined && (this.timeStamp.length !== 9)) {
            throw new ASN1SizeError("RadioParameterSetInfo.timeStamp violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a RadioParameterSetInfo
     * @description
     * 
     * This takes an `object` and converts it to a `RadioParameterSetInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RadioParameterSetInfo`.
     * @returns {RadioParameterSetInfo}
     */
    public static _from_object (_o: { [_K in keyof (RadioParameterSetInfo)]: (RadioParameterSetInfo)[_K] }): RadioParameterSetInfo {
        return new RadioParameterSetInfo(_o.timeStamp, _o.params);
    }


}

/**
 * @summary The Leading Root Component Types of RadioParameterSetInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RadioParameterSetInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("timeStamp", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("params", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of RadioParameterSetInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RadioParameterSetInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RadioParameterSetInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RadioParameterSetInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RadioParameterSetInfo: $.ASN1Decoder<RadioParameterSetInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RadioParameterSetInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RadioParameterSetInfo (el: _Element): RadioParameterSetInfo {
    if (!_cached_decoder_for_RadioParameterSetInfo) { _cached_decoder_for_RadioParameterSetInfo = function (el: _Element): RadioParameterSetInfo {
    let timeStamp: OPTIONAL<OCTET_STRING>;
    let params!: OCTET_STRING;
    const callbacks: $.DecodingMap = {
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "params": (_el: _Element): void => { params = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RadioParameterSetInfo,
        _extension_additions_list_spec_for_RadioParameterSetInfo,
        _root_component_type_list_2_spec_for_RadioParameterSetInfo,
        undefined,
    );
    return new RadioParameterSetInfo(
        timeStamp,
        params
    );
}; }
    return _cached_decoder_for_RadioParameterSetInfo(el);
}

let _cached_encoder_for_RadioParameterSetInfo: $.ASN1Encoder<RadioParameterSetInfo> | null = null;

/**
 * @summary Encodes a(n) RadioParameterSetInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RadioParameterSetInfo, encoded as an ASN.1 Element.
 */
export
function _encode_RadioParameterSetInfo (value: RadioParameterSetInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RadioParameterSetInfo) { _cached_encoder_for_RadioParameterSetInfo = function (value: RadioParameterSetInfo, _elGetter: $.ASN1Encoder<RadioParameterSetInfo>): _Element {
    const _components: _Element[] = [];
    if (value.timeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.timeStamp, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.params, $.BER));
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RadioParameterSetInfo(value, elGetter);
}


/* eslint-enable */

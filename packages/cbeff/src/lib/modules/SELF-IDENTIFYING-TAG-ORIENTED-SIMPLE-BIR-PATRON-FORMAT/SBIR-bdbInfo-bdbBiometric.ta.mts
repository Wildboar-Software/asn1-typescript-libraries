/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_BiometricSubtype, _encode_BiometricSubtype, type BiometricSubtype } from "../CBEFF-DATA-ELEMENTS/BiometricSubtype.ta.mjs";
import { _decode_BiometricType, _encode_BiometricType, type BiometricType } from "../CBEFF-DATA-ELEMENTS/BiometricType.ta.mjs";


/**
 * @summary SBIR_bdbInfo_bdbBiometric
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SBIR-bdbInfo-bdbBiometric ::= SEQUENCE {
 *     bdbBiometricType          [1] BiometricType,
 *     bdbBiometricSubtype       [2] BiometricSubtype OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SBIR_bdbInfo_bdbBiometric {
    /**
     * @summary `bdbBiometricType`.
     * @public
     * @readonly
     */
    readonly bdbBiometricType: BiometricType;
    /**
     * @summary `bdbBiometricSubtype`.
     * @public
     * @readonly
     */
    readonly bdbBiometricSubtype: OPTIONAL<BiometricSubtype>;

    constructor (
        bdbBiometricType: BiometricType,
        bdbBiometricSubtype?: OPTIONAL<BiometricSubtype>
    ) {
        this.bdbBiometricType = bdbBiometricType;
        this.bdbBiometricSubtype = bdbBiometricSubtype;
    }

    /**
     * @summary Restructures an object into a SBIR_bdbInfo_bdbBiometric
     * @description
     * 
     * This takes an `object` and converts it to a `SBIR_bdbInfo_bdbBiometric`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SBIR_bdbInfo_bdbBiometric`.
     * @returns {SBIR_bdbInfo_bdbBiometric}
     */
    public static _from_object (_o: { [_K in keyof (SBIR_bdbInfo_bdbBiometric)]: (SBIR_bdbInfo_bdbBiometric)[_K] }): SBIR_bdbInfo_bdbBiometric {
        return new SBIR_bdbInfo_bdbBiometric(_o.bdbBiometricType, _o.bdbBiometricSubtype);
    }


}

/**
 * @summary The Leading Root Component Types of SBIR_bdbInfo_bdbBiometric
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SBIR_bdbInfo_bdbBiometric: $.ComponentSpec[] = [
    new $.ComponentSpec("bdbBiometricType", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("bdbBiometricSubtype", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SBIR_bdbInfo_bdbBiometric
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SBIR_bdbInfo_bdbBiometric: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SBIR_bdbInfo_bdbBiometric
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SBIR_bdbInfo_bdbBiometric: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SBIR_bdbInfo_bdbBiometric: $.ASN1Decoder<SBIR_bdbInfo_bdbBiometric> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SBIR_bdbInfo_bdbBiometric
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SBIR_bdbInfo_bdbBiometric (el: _Element): SBIR_bdbInfo_bdbBiometric {
    if (!_cached_decoder_for_SBIR_bdbInfo_bdbBiometric) { _cached_decoder_for_SBIR_bdbInfo_bdbBiometric = function (el: _Element): SBIR_bdbInfo_bdbBiometric {
    let bdbBiometricType!: BiometricType;
    let bdbBiometricSubtype: OPTIONAL<BiometricSubtype>;
    const callbacks: $.DecodingMap = {
        "bdbBiometricType": (_el: _Element): void => { bdbBiometricType = $._decode_implicit<BiometricType>(() => _decode_BiometricType)(_el); },
        "bdbBiometricSubtype": (_el: _Element): void => { bdbBiometricSubtype = $._decode_implicit<BiometricSubtype>(() => _decode_BiometricSubtype)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SBIR_bdbInfo_bdbBiometric,
        _extension_additions_list_spec_for_SBIR_bdbInfo_bdbBiometric,
        _root_component_type_list_2_spec_for_SBIR_bdbInfo_bdbBiometric,
        undefined,
    );
    return new SBIR_bdbInfo_bdbBiometric(
        bdbBiometricType,
        bdbBiometricSubtype
    );
}; }
    return _cached_decoder_for_SBIR_bdbInfo_bdbBiometric(el);
}

let _cached_encoder_for_SBIR_bdbInfo_bdbBiometric: $.ASN1Encoder<SBIR_bdbInfo_bdbBiometric> | null = null;

/**
 * @summary Encodes a(n) SBIR_bdbInfo_bdbBiometric into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SBIR_bdbInfo_bdbBiometric, encoded as an ASN.1 Element.
 */
export
function _encode_SBIR_bdbInfo_bdbBiometric (value: SBIR_bdbInfo_bdbBiometric, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SBIR_bdbInfo_bdbBiometric) { _cached_encoder_for_SBIR_bdbInfo_bdbBiometric = function (value: SBIR_bdbInfo_bdbBiometric, elGetter: $.ASN1Encoder<SBIR_bdbInfo_bdbBiometric>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_BiometricType, $.BER)(value.bdbBiometricType, $.BER));
    if (value.bdbBiometricSubtype !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_BiometricSubtype, $.BER)(value.bdbBiometricSubtype, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SBIR_bdbInfo_bdbBiometric(value, elGetter);
}


/* eslint-enable */

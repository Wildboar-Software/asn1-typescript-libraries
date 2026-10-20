/* eslint-disable */
import {
    ASN1SizeError,
    BOOLEAN,
    IA5String,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { strmax } from "../PlatformCertificateProfileV2/strmax.va.mjs";
import { SecurityLevel, _decode_SecurityLevel, _encode_SecurityLevel, _enum_for_SecurityLevel } from "../PlatformCertificateProfileV2/SecurityLevel.ta.mjs";
// export { SecurityLevel, _enum_for_SecurityLevel, SecurityLevel_level1 /* IMPORTED_LONG_ENUMERATION_ITEM */, level1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, SecurityLevel_level2 /* IMPORTED_LONG_ENUMERATION_ITEM */, level2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, SecurityLevel_level3 /* IMPORTED_LONG_ENUMERATION_ITEM */, level3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, SecurityLevel_level4 /* IMPORTED_LONG_ENUMERATION_ITEM */, level4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SecurityLevel, _encode_SecurityLevel } from "../PlatformCertificateProfileV2/SecurityLevel.ta.mjs";


/**
 * @summary FIPSLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FIPSLevel ::= SEQUENCE {
 *     version             IA5String (SIZE (1..strmax)), -- “140-1”, “140-2”, or “140-3”
 *     level               SecurityLevel,
 *     plus                BOOLEAN DEFAULT FALSE
 * }
 * ```
 * 
 * @class
 */
export
class FIPSLevel {
    /**
     * @summary `version`.
     * @public
     * @readonly
     */
    readonly version: IA5String;
    /**
     * @summary `level`.
     * @public
     * @readonly
     */
    readonly level: SecurityLevel;
    /**
     * @summary `plus`.
     * @public
     * @readonly
     */
    readonly plus: OPTIONAL<BOOLEAN>;

    constructor (
        version: IA5String,
        level: SecurityLevel,
        plus: OPTIONAL<BOOLEAN>
    ) {
        this.version = version;
        this.level = level;
        this.plus = plus;
        if (version.length < 1 || version.length > strmax) {
            throw new ASN1SizeError("FIPSLevel.version violates SIZE (1..strmax)");
        }
    }

    /**
     * @summary Restructures an object into a FIPSLevel
     * @description
     * 
     * This takes an `object` and converts it to a `FIPSLevel`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FIPSLevel`.
     * @returns {FIPSLevel}
     */
    public static _from_object (_o: { [_K in keyof (FIPSLevel)]: (FIPSLevel)[_K] }): FIPSLevel {
        return new FIPSLevel(_o.version, _o.level, _o.plus);
    }

    /**
     * @summary Getter that returns the default value for `plus`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_plus () { return false; }        /**
         * @summary The enum used as the type of the component `level`
         * @public
         * @static
         */

    public static _enum_for_level = _enum_for_SecurityLevel;
}

/**
 * @summary The Leading Root Component Types of FIPSLevel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FIPSLevel: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.universal, 22)),
    new $.ComponentSpec("level", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("plus", true, $.hasTag(_TagClass.universal, 1))
];

/**
 * @summary The Trailing Root Component Types of FIPSLevel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FIPSLevel: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FIPSLevel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FIPSLevel: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FIPSLevel: $.ASN1Decoder<FIPSLevel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FIPSLevel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FIPSLevel (el: _Element): FIPSLevel {
    if (!_cached_decoder_for_FIPSLevel) { _cached_decoder_for_FIPSLevel = function (el: _Element): FIPSLevel {
    let version!: IA5String;
    let level!: SecurityLevel;
    let plus: OPTIONAL<BOOLEAN> = FIPSLevel._default_value_for_plus;
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = $._decodeIA5String(_el); },
        "level": (_el: _Element): void => { level = _decode_SecurityLevel(_el); },
        "plus": (_el: _Element): void => { plus = $._decodeBoolean(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FIPSLevel,
        _extension_additions_list_spec_for_FIPSLevel,
        _root_component_type_list_2_spec_for_FIPSLevel,
        undefined,
    );
    return new FIPSLevel(
        version,
        level,
        plus
    );
}; }
    return _cached_decoder_for_FIPSLevel(el);
}

let _cached_encoder_for_FIPSLevel: $.ASN1Encoder<FIPSLevel> | null = null;

/**
 * @summary Encodes a(n) FIPSLevel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FIPSLevel, encoded as an ASN.1 Element.
 */
export
function _encode_FIPSLevel (value: FIPSLevel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FIPSLevel) { _cached_encoder_for_FIPSLevel = function (value: FIPSLevel, elGetter: $.ASN1Encoder<FIPSLevel>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encodeIA5String(value.version, $.BER));
    _components.push(/* REQUIRED   */ _encode_SecurityLevel(value.level, $.BER));
    if (value.plus !== undefined && !$.deepEq(value.plus, FIPSLevel._default_value_for_plus)) {
        _components.push(/* IF_DEFAULT */ $._encodeBoolean(value.plus, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_FIPSLevel(value, elGetter);
}


/* eslint-enable */

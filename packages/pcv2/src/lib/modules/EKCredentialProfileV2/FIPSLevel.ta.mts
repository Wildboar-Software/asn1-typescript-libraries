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
import { strmax } from "../EKCredentialProfileV2/strmax.va.mjs";
import { SecurityLevel, _decode_SecurityLevel, _encode_SecurityLevel, _enum_for_SecurityLevel } from "../EKCredentialProfileV2/SecurityLevel.ta.mjs";


/**
 * @summary FIPSLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FIPSLevel ::= SEQUENCE {
 *     -- // FIXME: IA5String, not IA5STRING
 *     version     IA5String (SIZE (1..strmax)), -- “140-1” or “140-2”
 *     level       SecurityLevel,
 *     plus        BOOLEAN DEFAULT FALSE
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
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        version: IA5String,
        level: SecurityLevel,
        plus: OPTIONAL<BOOLEAN>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.version = version;
        this.level = level;
        this.plus = plus;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
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
        return new FIPSLevel(_o.version, _o.level, _o.plus, _o._unrecognizedExtensionsList);
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
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = $._decodeIA5String(_el); },
        "level": (_el: _Element): void => { level = _decode_SecurityLevel(_el); },
        "plus": (_el: _Element): void => { plus = $._decodeBoolean(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FIPSLevel,
        _extension_additions_list_spec_for_FIPSLevel,
        _root_component_type_list_2_spec_for_FIPSLevel,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new FIPSLevel(
        version,
        level,
        plus,
        _unrecognizedExtensionsList
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
    if (!_cached_encoder_for_FIPSLevel) { _cached_encoder_for_FIPSLevel = function (value: FIPSLevel): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encodeIA5String(value.version, $.BER);
    _components[_components_i++] = /* REQUIRED   */ _encode_SecurityLevel(value.level, $.BER);
    if (value.plus !== undefined && !$.deepEq(value.plus, FIPSLevel._default_value_for_plus)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encodeBoolean(value.plus, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_FIPSLevel(value, elGetter);
}


/* eslint-enable */

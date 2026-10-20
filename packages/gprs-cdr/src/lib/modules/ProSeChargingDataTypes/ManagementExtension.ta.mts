/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OBJECT_IDENTIFIER,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { DMI_EXTENSION } from "../ProSeChargingDataTypes/DMI-EXTENSION.oca.mjs";
// export { ManagementExtensionSet } from "../ProSeChargingDataTypes/ManagementExtensionSet.osa.mjs";


/**
 * @summary ManagementExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ManagementExtension ::= SEQUENCE {
 *    identifier     DMI-EXTENSION.&id ({ManagementExtensionSet}) ,
 *    significance   [1] IMPLICIT BOOLEAN DEFAULT FALSE,
 *    information    [2] DMI-EXTENSION.&Value ({ManagementExtensionSet}{@.identifier}) }
 * ```
 * 
 * @class
 */
export
class ManagementExtension {
    /**
     * @summary `identifier`.
     * @public
     * @readonly
     */
    readonly identifier: OBJECT_IDENTIFIER;
    /**
     * @summary `significance`.
     * @public
     * @readonly
     */
    readonly significance: OPTIONAL<BOOLEAN>;
    /**
     * @summary `information`.
     * @public
     * @readonly
     */
    readonly information: _Element;

    constructor (
        identifier: OBJECT_IDENTIFIER,
        significance: OPTIONAL<BOOLEAN>,
        information: _Element
    ) {
        this.identifier = identifier;
        this.significance = significance;
        this.information = information;
    }

    /**
     * @summary Restructures an object into a ManagementExtension
     * @description
     * 
     * This takes an `object` and converts it to a `ManagementExtension`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ManagementExtension`.
     * @returns {ManagementExtension}
     */
    public static _from_object (_o: { [_K in keyof (ManagementExtension)]: (ManagementExtension)[_K] }): ManagementExtension {
        return new ManagementExtension(_o.identifier, _o.significance, _o.information);
    }

    /**
     * @summary Getter that returns the default value for `significance`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_significance () { return false; }
}

/**
 * @summary The Leading Root Component Types of ManagementExtension
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ManagementExtension: $.ComponentSpec[] = [
    new $.ComponentSpec("identifier", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("significance", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("information", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ManagementExtension
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ManagementExtension: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ManagementExtension
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ManagementExtension: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ManagementExtension: $.ASN1Decoder<ManagementExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ManagementExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ManagementExtension (el: _Element): ManagementExtension {
    if (!_cached_decoder_for_ManagementExtension) { _cached_decoder_for_ManagementExtension = function (el: _Element): ManagementExtension {
    let identifier!: OBJECT_IDENTIFIER;
    let significance: OPTIONAL<BOOLEAN> = ManagementExtension._default_value_for_significance;
    let information!: _Element;
    const callbacks: $.DecodingMap = {
        "identifier": (_el: _Element): void => { identifier = $._decodeObjectIdentifier(_el); },
        "significance": (_el: _Element): void => { significance = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "information": (_el: _Element): void => { information = $._decode_explicit<_Element>(() => $._decodeAny)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ManagementExtension,
        _extension_additions_list_spec_for_ManagementExtension,
        _root_component_type_list_2_spec_for_ManagementExtension,
        undefined,
    );
    return new ManagementExtension(
        identifier,
        significance,
        information
    );
}; }
    return _cached_decoder_for_ManagementExtension(el);
}

let _cached_encoder_for_ManagementExtension: $.ASN1Encoder<ManagementExtension> | null = null;

/**
 * @summary Encodes a(n) ManagementExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManagementExtension, encoded as an ASN.1 Element.
 */
export
function _encode_ManagementExtension (value: ManagementExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ManagementExtension) { _cached_encoder_for_ManagementExtension = function (value: ManagementExtension, elGetter: $.ASN1Encoder<ManagementExtension>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encodeObjectIdentifier(value.identifier, $.BER));
    if (value.significance !== undefined && !$.deepEq(value.significance, ManagementExtension._default_value_for_significance)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.significance, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => $._encodeAny, $.BER)(value.information, $.BER));
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ManagementExtension(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ObjectIdentifier as _OID,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BiometricHeaderTemplateExplicit_biometricInformationDO, _decode_BiometricHeaderTemplateExplicit_biometricInformationDO, _encode_BiometricHeaderTemplateExplicit_biometricInformationDO } from "../CBEFF-SMARTCARD-BIDO-EXPLICIT/BiometricHeaderTemplateExplicit-biometricInformationDO.ta.mjs";
import { BiometricHeaderTemplateExplicit_tagAllocationAuthority, _decode_BiometricHeaderTemplateExplicit_tagAllocationAuthority, _encode_BiometricHeaderTemplateExplicit_tagAllocationAuthority } from "../CBEFF-SMARTCARD-BIDO-EXPLICIT/BiometricHeaderTemplateExplicit-tagAllocationAuthority.ta.mjs";


/**
 * @summary BiometricHeaderTemplateExplicit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricHeaderTemplateExplicit ::= SET {
 *     tagAllocationAuthority   [APPLICATION 24] CHOICE {
 *         oid         OBJECT IDENTIFIER,
 *         country     [APPLICATION 1] OCTET STRING,
 *         issuerID    [APPLICATION 2] OCTET STRING,
 *         application [APPLICATION 15] OCTET STRING
 *     } DEFAULT oid: {1 0 19785 3 1 19},
 *     biometricInformationDO   [APPLICATION 16] SET {
 *         patronHeaderVersion      [0]  PatronHeaderVersion DEFAULT '0100'H,
 *         bdbBiometricType         [1]  BiometricType OPTIONAL,
 *         bdbBiometricSubType      [2]  BiometricSubtype OPTIONAL,
 *         -- Required to be absent unless bdbBiometricType is present
 *         bdbCreationDate          [3]  BCDTime OPTIONAL,
 *         -- CBEFF_BDB_creation_date
 *         birCreator               [4]  Creator OPTIONAL,
 *         bdbValidityPeriod        [5]  BCDDatePeriod OPTIONAL,
 *         bdbPID                   [6]  ProductID OPTIONAL,
 *         bdbFormatOwner           [7]  FormatOwner,
 *         bdbFormatType            [8]  FormatType,
 *         birIndex                 [16] BIRIndex OPTIONAL
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class BiometricHeaderTemplateExplicit {
    /**
     * @summary `tagAllocationAuthority`.
     * @public
     * @readonly
     */
    readonly tagAllocationAuthority: OPTIONAL<BiometricHeaderTemplateExplicit_tagAllocationAuthority>;
    /**
     * @summary `biometricInformationDO`.
     * @public
     * @readonly
     */
    readonly biometricInformationDO: BiometricHeaderTemplateExplicit_biometricInformationDO;

    constructor (
        tagAllocationAuthority: OPTIONAL<BiometricHeaderTemplateExplicit_tagAllocationAuthority>,
        biometricInformationDO: BiometricHeaderTemplateExplicit_biometricInformationDO
    ) {
        this.tagAllocationAuthority = tagAllocationAuthority;
        this.biometricInformationDO = biometricInformationDO;
    }

    /**
     * @summary Restructures an object into a BiometricHeaderTemplateExplicit
     * @description
     * 
     * This takes an `object` and converts it to a `BiometricHeaderTemplateExplicit`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BiometricHeaderTemplateExplicit`.
     * @returns {BiometricHeaderTemplateExplicit}
     */
    public static _from_object (_o: { [_K in keyof (BiometricHeaderTemplateExplicit)]: (BiometricHeaderTemplateExplicit)[_K] }): BiometricHeaderTemplateExplicit {
        return new BiometricHeaderTemplateExplicit(_o.tagAllocationAuthority, _o.biometricInformationDO);
    }

    /**
     * @summary Getter that returns the default value for `tagAllocationAuthority`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_tagAllocationAuthority () { return { oid: _OID.fromParts([1, 0, 19785, 3, 1, 19,]) }; }
}

/**
 * @summary The Leading Root Component Types of BiometricHeaderTemplateExplicit
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BiometricHeaderTemplateExplicit: $.ComponentSpec[] = [
    new $.ComponentSpec("tagAllocationAuthority", true, $.hasTag(_TagClass.application, 24)),
    new $.ComponentSpec("biometricInformationDO", false, $.hasTag(_TagClass.application, 16))
];

/**
 * @summary The Trailing Root Component Types of BiometricHeaderTemplateExplicit
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BiometricHeaderTemplateExplicit: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BiometricHeaderTemplateExplicit
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BiometricHeaderTemplateExplicit: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BiometricHeaderTemplateExplicit: $.ASN1Decoder<BiometricHeaderTemplateExplicit> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BiometricHeaderTemplateExplicit
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BiometricHeaderTemplateExplicit (el: _Element): BiometricHeaderTemplateExplicit {
    if (!_cached_decoder_for_BiometricHeaderTemplateExplicit) { _cached_decoder_for_BiometricHeaderTemplateExplicit = function (el: _Element): BiometricHeaderTemplateExplicit {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let tagAllocationAuthority: OPTIONAL<BiometricHeaderTemplateExplicit_tagAllocationAuthority> = BiometricHeaderTemplateExplicit._default_value_for_tagAllocationAuthority;
    let biometricInformationDO!: BiometricHeaderTemplateExplicit_biometricInformationDO;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "tagAllocationAuthority": (_el: _Element): void => { tagAllocationAuthority = $._decode_explicit<BiometricHeaderTemplateExplicit_tagAllocationAuthority>(() => _decode_BiometricHeaderTemplateExplicit_tagAllocationAuthority)(_el); },
        "biometricInformationDO": (_el: _Element): void => { biometricInformationDO = $._decode_implicit<BiometricHeaderTemplateExplicit_biometricInformationDO>(() => _decode_BiometricHeaderTemplateExplicit_biometricInformationDO)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_BiometricHeaderTemplateExplicit,
        _extension_additions_list_spec_for_BiometricHeaderTemplateExplicit,
        _root_component_type_list_2_spec_for_BiometricHeaderTemplateExplicit,
        undefined,
    );
    return new BiometricHeaderTemplateExplicit( /* SET_CONSTRUCTOR_CALL */
        tagAllocationAuthority,
        biometricInformationDO
    );
}; }
    return _cached_decoder_for_BiometricHeaderTemplateExplicit(el);
}

let _cached_encoder_for_BiometricHeaderTemplateExplicit: $.ASN1Encoder<BiometricHeaderTemplateExplicit> | null = null;

/**
 * @summary Encodes a(n) BiometricHeaderTemplateExplicit into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricHeaderTemplateExplicit, encoded as an ASN.1 Element.
 */
export
function _encode_BiometricHeaderTemplateExplicit (value: BiometricHeaderTemplateExplicit, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BiometricHeaderTemplateExplicit) { _cached_encoder_for_BiometricHeaderTemplateExplicit = function (value: BiometricHeaderTemplateExplicit, elGetter: $.ASN1Encoder<BiometricHeaderTemplateExplicit>): _Element {
    const _components: _Element[] = [];
    if (value.tagAllocationAuthority !== undefined && !$.deepEq(value.tagAllocationAuthority, BiometricHeaderTemplateExplicit._default_value_for_tagAllocationAuthority)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.application, 24, () => _encode_BiometricHeaderTemplateExplicit_tagAllocationAuthority, $.BER)(value.tagAllocationAuthority, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.application, 16, () => _encode_BiometricHeaderTemplateExplicit_biometricInformationDO, $.BER)(value.biometricInformationDO, $.BER));
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_BiometricHeaderTemplateExplicit(value, elGetter);
}


/* eslint-enable */

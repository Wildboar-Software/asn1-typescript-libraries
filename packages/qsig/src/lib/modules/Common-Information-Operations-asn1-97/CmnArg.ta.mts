/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FeatureIdList, _decode_FeatureIdList, _encode_FeatureIdList } from "../Common-Information-Operations-asn1-97/FeatureIdList.ta.mjs";
import { EquipmentId, _decode_EquipmentId, _encode_EquipmentId } from "../Common-Information-Operations-asn1-97/EquipmentId.ta.mjs";
import { PartyCategory, _decode_PartyCategory, _encode_PartyCategory, _enum_for_PartyCategory } from "../Common-Information-Operations-asn1-97/PartyCategory.ta.mjs";
import { CmnArg_extension, _decode_CmnArg_extension, _encode_CmnArg_extension } from "../Common-Information-Operations-asn1-97/CmnArg-extension.ta.mjs";

/**
 * @summary CmnArg
 * @description
 *
 * Common information exchanged by cmnInform, and returned by cmnRequest
 * (ECMA-251 §6.1, §6.3.1). Every element is optional. It may contain feature
 * identifiers available for this call, a DND-override protection level, a
 * call-intrusion protection level, an equipment identity, and a party
 * category. The receiver may use it for any purpose, for example indications
 * or filtering feature requests (§6.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-251/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CmnArg ::= SEQUENCE {
 *     featureIdentifier [2] IMPLICIT FeatureIdList OPTIONAL,
 *     ssDNDOprotectionLevel [3] IMPLICIT INTEGER (0..3) OPTIONAL,
 *     -- Supplementary Service Do Not Disturb Override Protection level,
 *     -- meaningful only in backward direction; inclusion indicates
 *     -- support of SS-DNDO as well as the applicable protection level.
 *     ssCIprotectionLevel [4] IMPLICIT INTEGER (0..3) OPTIONAL,
 *     -- Supplementary Service Call Intrusion Protection level,
 *     -- meaningful both in forward & backward direction; inclusion indicates support
 *     -- of SS-CI as an Unwanted user PINX (forward direction) or as a Terminating
 *     -- PINX (backward direction), as well as the applicable protection level.
 *     equipmentIdentity [5] IMPLICIT EquipmentId OPTIONAL,
 *     partyCategory [6] IMPLICIT PartyCategory OPTIONAL,
 *     extension CHOICE {
 *         single [7] IMPLICIT Extension {{CMNExtSet}},
 *         multiple [8] IMPLICIT SEQUENCE OF Extension {{CMNExtSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CmnArg {
    /**
     * @summary `featureIdentifier`.
     * @description
     *
     * Features available for this call. A bit set to ONE means that feature
     * is available (ECMA-251 §6.3.1). Each named bit has its own direction
     * restriction.
     * @public
     * @readonly
     */
    readonly featureIdentifier: OPTIONAL<FeatureIdList>;
    /**
     * @summary `ssDNDOprotectionLevel`.
     * @description
     *
     * Do Not Disturb Override protection level, integer 0..3. Meaningful
     * only in the backward direction. Presence indicates that SS-DNDO is
     * supported and gives the applicable protection level (ECMA-251 §6.3.1).
     * ECMA-251 does not define what each integer means.
     * @public
     * @readonly
     */
    readonly ssDNDOprotectionLevel: OPTIONAL<INTEGER>;
    /**
     * @summary `ssCIprotectionLevel`.
     * @description
     *
     * Call Intrusion protection level, integer 0..3. Meaningful in both
     * directions. Presence indicates support of SS-CI as an Unwanted-user
     * PINX in the forward direction, or as a Terminating PINX in the
     * backward direction, and gives the applicable protection level
     * (ECMA-251 §6.3.1). ECMA-251 does not define what each integer means.
     * @public
     * @readonly
     */
    readonly ssCIprotectionLevel: OPTIONAL<INTEGER>;
    /**
     * @summary `equipmentIdentity`.
     * @description
     *
     * Equipment of a calling or called party (ECMA-251 §6.3.1). Network-wide
     * unique assignment is outside the scope of the standard.
     * @public
     * @readonly
     */
    readonly equipmentIdentity: OPTIONAL<EquipmentId>;
    /**
     * @summary `partyCategory`.
     * @description
     *
     * Category of the calling user (forward, in SETUP) or the called user
     * (backward, in ALERTING or CONNECT), ECMA-251 §6.3.1.
     * @public
     * @readonly
     */
    readonly partyCategory: OPTIONAL<PartyCategory>;
    /**
     * @summary `extension`.
     * @description
     *
     * Manufacturer-specific extension. ECMA-251 §6.3.1 leaves CMNExtSet
     * empty.
     * @public
     * @readonly
     */
    readonly extension: OPTIONAL<CmnArg_extension>;

    constructor (
        featureIdentifier?: OPTIONAL<FeatureIdList>,
        ssDNDOprotectionLevel?: OPTIONAL<INTEGER>,
        ssCIprotectionLevel?: OPTIONAL<INTEGER>,
        equipmentIdentity?: OPTIONAL<EquipmentId>,
        partyCategory?: OPTIONAL<PartyCategory>,
        extension?: OPTIONAL<CmnArg_extension>
    ) {
        this.featureIdentifier = featureIdentifier;
        this.ssDNDOprotectionLevel = ssDNDOprotectionLevel;
        this.ssCIprotectionLevel = ssCIprotectionLevel;
        this.equipmentIdentity = equipmentIdentity;
        this.partyCategory = partyCategory;
        this.extension = extension;
    
        if (ssDNDOprotectionLevel !== undefined && (typeof ssDNDOprotectionLevel === "bigint" ? (ssDNDOprotectionLevel < 0n || ssDNDOprotectionLevel > 3n) : (ssDNDOprotectionLevel < 0 || ssDNDOprotectionLevel > 3))) {
            throw new ASN1OverflowError("CmnArg.ssDNDOprotectionLevel violates INTEGER constraint");
        }
        if (ssCIprotectionLevel !== undefined && (typeof ssCIprotectionLevel === "bigint" ? (ssCIprotectionLevel < 0n || ssCIprotectionLevel > 3n) : (ssCIprotectionLevel < 0 || ssCIprotectionLevel > 3))) {
            throw new ASN1OverflowError("CmnArg.ssCIprotectionLevel violates INTEGER constraint");
        }
    }

    /**
     * @summary Restructures an object into a CmnArg
     * @description
     * 
     * This takes an `object` and converts it to a `CmnArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CmnArg`.
     * @returns {CmnArg}
     */
    public static _from_object (_o: { [_K in keyof (CmnArg)]: (CmnArg)[_K] }): CmnArg {
        return new CmnArg(_o.featureIdentifier, _o.ssDNDOprotectionLevel, _o.ssCIprotectionLevel, _o.equipmentIdentity, _o.partyCategory, _o.extension);
    }

        /**
         * @summary The enum used as the type of the component `partyCategory`
         * @public
         * @static
         */

    public static _enum_for_partyCategory = _enum_for_PartyCategory;
}

/**
 * @summary The Leading Root Component Types of CmnArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CmnArg: $.ComponentSpec[] = [
    new $.ComponentSpec("featureIdentifier", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("ssDNDOprotectionLevel", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("ssCIprotectionLevel", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("equipmentIdentity", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("partyCategory", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("extension", true, $.or($.hasTag(_TagClass.context, 7), $.hasTag(_TagClass.context, 8)))
];

/**
 * @summary The Trailing Root Component Types of CmnArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CmnArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CmnArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CmnArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CmnArg: $.ASN1Decoder<CmnArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CmnArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CmnArg (el: _Element): CmnArg {
    if (!_cached_decoder_for_CmnArg) { _cached_decoder_for_CmnArg = function (el: _Element): CmnArg {
    let featureIdentifier: OPTIONAL<FeatureIdList>;
    let ssDNDOprotectionLevel: OPTIONAL<INTEGER>;
    let ssCIprotectionLevel: OPTIONAL<INTEGER>;
    let equipmentIdentity: OPTIONAL<EquipmentId>;
    let partyCategory: OPTIONAL<PartyCategory>;
    let extension: OPTIONAL<CmnArg_extension>;
    const callbacks: $.DecodingMap = {
        "featureIdentifier": (_el: _Element): void => { featureIdentifier = $._decode_implicit<FeatureIdList>(() => _decode_FeatureIdList)(_el); },
        "ssDNDOprotectionLevel": (_el: _Element): void => { ssDNDOprotectionLevel = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "ssCIprotectionLevel": (_el: _Element): void => { ssCIprotectionLevel = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "equipmentIdentity": (_el: _Element): void => { equipmentIdentity = $._decode_implicit<EquipmentId>(() => _decode_EquipmentId)(_el); },
        "partyCategory": (_el: _Element): void => { partyCategory = $._decode_implicit<PartyCategory>(() => _decode_PartyCategory)(_el); },
        "extension": (_el: _Element): void => { extension = _decode_CmnArg_extension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CmnArg,
        _extension_additions_list_spec_for_CmnArg,
        _root_component_type_list_2_spec_for_CmnArg,
        undefined,
    );
    return new CmnArg(
        featureIdentifier,
        ssDNDOprotectionLevel,
        ssCIprotectionLevel,
        equipmentIdentity,
        partyCategory,
        extension
    );
}; }
    return _cached_decoder_for_CmnArg(el);
}

let _cached_encoder_for_CmnArg: $.ASN1Encoder<CmnArg> | null = null;

/**
 * @summary Encodes a(n) CmnArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CmnArg, encoded as an ASN.1 Element.
 */
export
function _encode_CmnArg (value: CmnArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CmnArg) { _cached_encoder_for_CmnArg = function (value: CmnArg, _elGetter: $.ASN1Encoder<CmnArg>): _Element {
    const _components: _Element[] = [];
    if (value.featureIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_FeatureIdList, $.BER)(value.featureIdentifier, $.BER));
    }
    if (value.ssDNDOprotectionLevel !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.ssDNDOprotectionLevel, $.BER));
    }
    if (value.ssCIprotectionLevel !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.ssCIprotectionLevel, $.BER));
    }
    if (value.equipmentIdentity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_EquipmentId, $.BER)(value.equipmentIdentity, $.BER));
    }
    if (value.partyCategory !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_PartyCategory, $.BER)(value.partyCategory, $.BER));
    }
    if (value.extension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_CmnArg_extension(value.extension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CmnArg(value, elGetter);
}

/* eslint-enable */

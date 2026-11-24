/* eslint-disable */
import {
    type INTEGER,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { assertIntegerRange, assertSequenceSize } from "../../constraints.mjs";
import { RegistryID, _decode_RegistryID, _encode_RegistryID } from "../CBEFF-DATA-ELEMENTS/RegistryID.ta.mjs";
import { Version, _decode_Version, _encode_Version } from "../CBEFF-DATA-ELEMENTS/Version.ta.mjs";
import { ComplexSBIR_birInfo, _decode_ComplexSBIR_birInfo, _encode_ComplexSBIR_birInfo } from "../SELF-IDENTIFYING-TAG-ORIENTED-COMPLEX-BIR-PATRON-FORMAT/ComplexSBIR-birInfo.ta.mjs";
import { type ComplexSBIR_children_childBir, _decode_ComplexSBIR_children_childBir, _encode_ComplexSBIR_children_childBir } from "../SELF-IDENTIFYING-TAG-ORIENTED-COMPLEX-BIR-PATRON-FORMAT/ComplexSBIR-children-childBir.ta.mjs";
import { ComplexSBIR_sbInfo, _decode_ComplexSBIR_sbInfo, _encode_ComplexSBIR_sbInfo } from "../SELF-IDENTIFYING-TAG-ORIENTED-COMPLEX-BIR-PATRON-FORMAT/ComplexSBIR-sbInfo.ta.mjs";
import { type SBType, _decode_SBType, _encode_SBType } from "../SELF-IDENTIFYING-TAG-ORIENTED-COMPLEX-BIR-PATRON-FORMAT/SBType.ta.mjs";


/**
 * @summary ComplexSBIR
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ComplexSBIR ::= [APPLICATION 97] IMPLICIT SEQUENCE {
 *     birSelfId           [6]  RegistryID,
 *     cbeffVersion        [28] Version,
 *     patronHeaderVersion [0]  Version,
 *     numChildren         [5]  INTEGER (1..255),
 *     birInfo             [7]  SET {
 *         birIntegrity        [0]  IntegrityOptions,
 *         birCreationDate     [24] DATE-TIME OPTIONAL,
 *         birValidityPeriod   [27] ValidityPeriod OPTIONAL,
 *         birCreator          [4]  Creator OPTIONAL,
 *         birIndex            [16] BIRIndex OPTIONAL,
 *         birPayload          [1] Payload OPTIONAL,
 *         birPointer          [2] OCTET STRING (SIZE (0..65535)) OPTIONAL
 *     },
 *     sbInfo              [4]   SET { sbFormat [0] RegistryID } OPTIONAL,
 *     children            [1]   SEQUENCE (SIZE (1..255)) OF childBir CHOICE {
 *         simpleBIR   [APPLICATION 96] SBIR,        -- As per clause 16
 *         complexBIR  [APPLICATION 97] ComplexSBIR  -- As per clause 17
 *     },
 *     sb                  [18] SBType OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ComplexSBIR {
    /**
     * @summary `birSelfId`.
     * @public
     * @readonly
     */
    readonly birSelfId: RegistryID;
    /**
     * @summary `cbeffVersion`.
     * @public
     * @readonly
     */
    readonly cbeffVersion: Version;
    /**
     * @summary `patronHeaderVersion`.
     * @public
     * @readonly
     */
    readonly patronHeaderVersion: Version;
    /**
     * @summary `numChildren`.
     * @public
     * @readonly
     */
    readonly numChildren: INTEGER;
    /**
     * @summary `birInfo`.
     * @public
     * @readonly
     */
    readonly birInfo: ComplexSBIR_birInfo;
    /**
     * @summary `sbInfo`.
     * @public
     * @readonly
     */
    readonly sbInfo: OPTIONAL<ComplexSBIR_sbInfo>;
    /**
     * @summary `children`.
     * @public
     * @readonly
     */
    readonly children: ComplexSBIR_children_childBir[];
    /**
     * @summary `sb`.
     * @public
     * @readonly
     */
    readonly sb: OPTIONAL<SBType>;

    constructor (
        birSelfId: RegistryID,
        cbeffVersion: Version,
        patronHeaderVersion: Version,
        numChildren: INTEGER,
        birInfo: ComplexSBIR_birInfo,
        sbInfo: OPTIONAL<ComplexSBIR_sbInfo>,
        children: ComplexSBIR_children_childBir[],
        sb?: OPTIONAL<SBType>
    ) {
        assertIntegerRange(numChildren, 1, 255, "ComplexSBIR.numChildren");
        assertSequenceSize(children.length, 1, 255, "ComplexSBIR.children");
        this.birSelfId = birSelfId;
        this.cbeffVersion = cbeffVersion;
        this.patronHeaderVersion = patronHeaderVersion;
        this.numChildren = numChildren;
        this.birInfo = birInfo;
        this.sbInfo = sbInfo;
        this.children = children;
        this.sb = sb;
    }

    /**
     * @summary Restructures an object into a ComplexSBIR
     * @description
     * 
     * This takes an `object` and converts it to a `ComplexSBIR`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ComplexSBIR`.
     * @returns {ComplexSBIR}
     */
    public static _from_object (_o: { [_K in keyof (ComplexSBIR)]: (ComplexSBIR)[_K] }): ComplexSBIR {
        return new ComplexSBIR(_o.birSelfId, _o.cbeffVersion, _o.patronHeaderVersion, _o.numChildren, _o.birInfo, _o.sbInfo, _o.children, _o.sb);
    }


}

/**
 * @summary The Leading Root Component Types of ComplexSBIR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ComplexSBIR: $.ComponentSpec[] = [
    new $.ComponentSpec("birSelfId", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("cbeffVersion", false, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("patronHeaderVersion", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("numChildren", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("birInfo", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("sbInfo", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("children", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sb", true, $.hasTag(_TagClass.context, 18))
];

/**
 * @summary The Trailing Root Component Types of ComplexSBIR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ComplexSBIR: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ComplexSBIR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ComplexSBIR: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ComplexSBIR: $.ASN1Decoder<ComplexSBIR> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ComplexSBIR
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ComplexSBIR (el: _Element): ComplexSBIR {
    if (!_cached_decoder_for_ComplexSBIR) { _cached_decoder_for_ComplexSBIR = $._decode_implicit<ComplexSBIR>(() => function (el: _Element): ComplexSBIR {
    let birSelfId!: RegistryID;
    let cbeffVersion!: Version;
    let patronHeaderVersion!: Version;
    let numChildren!: INTEGER;
    let birInfo!: ComplexSBIR_birInfo;
    let sbInfo: OPTIONAL<ComplexSBIR_sbInfo>;
    let children!: ComplexSBIR_children_childBir[];
    let sb: OPTIONAL<SBType>;
    const callbacks: $.DecodingMap = {
        "birSelfId": (_el: _Element): void => { birSelfId = $._decode_implicit<RegistryID>(() => _decode_RegistryID)(_el); },
        "cbeffVersion": (_el: _Element): void => { cbeffVersion = $._decode_implicit<Version>(() => _decode_Version)(_el); },
        "patronHeaderVersion": (_el: _Element): void => { patronHeaderVersion = $._decode_implicit<Version>(() => _decode_Version)(_el); },
        "numChildren": (_el: _Element): void => { numChildren = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "birInfo": (_el: _Element): void => { birInfo = $._decode_implicit<ComplexSBIR_birInfo>(() => _decode_ComplexSBIR_birInfo)(_el); },
        "sbInfo": (_el: _Element): void => { sbInfo = $._decode_implicit<ComplexSBIR_sbInfo>(() => _decode_ComplexSBIR_sbInfo)(_el); },
        "children": (_el: _Element): void => { children = $._decode_implicit<ComplexSBIR_children_childBir[]>(() => $._decodeSequenceOf<ComplexSBIR_children_childBir>(() => _decode_ComplexSBIR_children_childBir))(_el); },
        "sb": (_el: _Element): void => { sb = $._decode_implicit<SBType>(() => _decode_SBType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ComplexSBIR,
        _extension_additions_list_spec_for_ComplexSBIR,
        _root_component_type_list_2_spec_for_ComplexSBIR,
        undefined,
    );
    return new ComplexSBIR(
        birSelfId,
        cbeffVersion,
        patronHeaderVersion,
        numChildren,
        birInfo,
        sbInfo,
        children,
        sb
    );
}); }
    return _cached_decoder_for_ComplexSBIR(el);
}

let _cached_encoder_for_ComplexSBIR: $.ASN1Encoder<ComplexSBIR> | null = null;

/**
 * @summary Encodes a(n) ComplexSBIR into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ComplexSBIR, encoded as an ASN.1 Element.
 */
export
function _encode_ComplexSBIR (value: ComplexSBIR, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ComplexSBIR) { _cached_encoder_for_ComplexSBIR = $._encode_implicit(_TagClass.application, 97, () => function (value: ComplexSBIR, elGetter: $.ASN1Encoder<ComplexSBIR>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_RegistryID, $.BER)(value.birSelfId, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 28, () => _encode_Version, $.BER)(value.cbeffVersion, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Version, $.BER)(value.patronHeaderVersion, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.numChildren, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_ComplexSBIR_birInfo, $.BER)(value.birInfo, $.BER));
    if (value.sbInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_ComplexSBIR_sbInfo, $.BER)(value.sbInfo, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<ComplexSBIR_children_childBir>(() => _encode_ComplexSBIR_children_childBir, $.BER), $.BER)(value.children, $.BER));
    if (value.sb !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_SBType, $.BER)(value.sb, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}, $.BER); }
    return _cached_encoder_for_ComplexSBIR(value, elGetter);
}


/* eslint-enable */

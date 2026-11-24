/* eslint-disable */
import {
    type INTEGER,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type PadSBIR_biometricdataBir_childBir, _decode_PadSBIR_biometricdataBir_childBir, _encode_PadSBIR_biometricdataBir_childBir } from "../BDB-AND-PAD-BIR-PATRON-FORMAT/PadSBIR-biometricdataBir-childBir.ta.mjs";
import { PadSBIR_birInfo, _decode_PadSBIR_birInfo, _encode_PadSBIR_birInfo } from "../BDB-AND-PAD-BIR-PATRON-FORMAT/PadSBIR-birInfo.ta.mjs";
import { type PadSBIR_padBir_childBir, _decode_PadSBIR_padBir_childBir, _encode_PadSBIR_padBir_childBir } from "../BDB-AND-PAD-BIR-PATRON-FORMAT/PadSBIR-padBir-childBir.ta.mjs";
import { PadSBIR_sbInfo, _decode_PadSBIR_sbInfo, _encode_PadSBIR_sbInfo } from "../BDB-AND-PAD-BIR-PATRON-FORMAT/PadSBIR-sbInfo.ta.mjs";
import { type SBType, _decode_SBType, _encode_SBType } from "../BDB-AND-PAD-BIR-PATRON-FORMAT/SBType.ta.mjs";
import { RegistryID, _decode_RegistryID, _encode_RegistryID } from "../CBEFF-DATA-ELEMENTS/RegistryID.ta.mjs";
import { Version, _decode_Version, _encode_Version } from "../CBEFF-DATA-ELEMENTS/Version.ta.mjs";


/**
 * @summary PadSBIR
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PadSBIR ::= [APPLICATION 97] IMPLICIT SEQUENCE {
 *     birSelfId               [6]  RegistryID,
 *     cbeffVersion            [28] Version,
 *     patronHeaderVersion     [0]  Version,
 *     numChildren             [5]  INTEGER (2..255),
 *     birInfo                 [7]  SET {
 *         birIntegrity            [0]  IntegrityOptions,
 *         birCreationDate         [24] DATE-TIME OPTIONAL,
 *         birValidityPeriod       [27] ValidityPeriod OPTIONAL,
 *         birCreator              [4]  OCTET STRING (SIZE(0..65535)) OPTIONAL,
 *         birIndex                [16] OCTET STRING (SIZE(0..65535)) OPTIONAL,
 *         birPayload              [1]  OCTET STRING (SIZE(0..65535)) OPTIONAL,
 *         birPointer              [2]  OCTET STRING (SIZE(0..65535)) OPTIONAL
 *     },
 *     sbInfo                  [4] SET { sbFormat [0] RegistryID } OPTIONAL,
 *     biometricdataBir        [1] SEQUENCE -- (SIZE(1..numChildren-1)) -- OF childBir CHOICE {
 *         simpleBIR   [APPLICATION 96] SBIR,       -- As per clause 16
 *         complexBIR  [APPLICATION 97] ComplexSBIR -- As per clause 17
 *     },
 *     padBir                [9] SEQUENCE -- (SIZE(1..numChildren-1)) -- OF childBir CHOICE {
 *         simpleBIR   [APPLICATION 96] SBIR,       -- As per clause 16
 *         complexBIR  [APPLICATION 97] ComplexSBIR -- As per clause 17
 *     },
 *     sb                    [18] SBType OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PadSBIR {
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
    readonly birInfo: PadSBIR_birInfo;
    /**
     * @summary `sbInfo`.
     * @public
     * @readonly
     */
    readonly sbInfo: OPTIONAL<PadSBIR_sbInfo>;
    /**
     * @summary `biometricdataBir`.
     * @public
     * @readonly
     */
    readonly biometricdataBir: PadSBIR_biometricdataBir_childBir[];
    /**
     * @summary `padBir`.
     * @public
     * @readonly
     */
    readonly padBir: PadSBIR_padBir_childBir[];
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
        birInfo: PadSBIR_birInfo,
        sbInfo: OPTIONAL<PadSBIR_sbInfo>,
        biometricdataBir: PadSBIR_biometricdataBir_childBir[],
        padBir: PadSBIR_padBir_childBir[],
        sb?: OPTIONAL<SBType>
    ) {
        this.birSelfId = birSelfId;
        this.cbeffVersion = cbeffVersion;
        this.patronHeaderVersion = patronHeaderVersion;
        this.numChildren = numChildren;
        this.birInfo = birInfo;
        this.sbInfo = sbInfo;
        this.biometricdataBir = biometricdataBir;
        this.padBir = padBir;
        this.sb = sb;
    }

    /**
     * @summary Restructures an object into a PadSBIR
     * @description
     * 
     * This takes an `object` and converts it to a `PadSBIR`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PadSBIR`.
     * @returns {PadSBIR}
     */
    public static _from_object (_o: { [_K in keyof (PadSBIR)]: (PadSBIR)[_K] }): PadSBIR {
        return new PadSBIR(_o.birSelfId, _o.cbeffVersion, _o.patronHeaderVersion, _o.numChildren, _o.birInfo, _o.sbInfo, _o.biometricdataBir, _o.padBir, _o.sb);
    }


}

/**
 * @summary The Leading Root Component Types of PadSBIR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PadSBIR: $.ComponentSpec[] = [
    new $.ComponentSpec("birSelfId", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("cbeffVersion", false, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("patronHeaderVersion", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("numChildren", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("birInfo", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("sbInfo", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("biometricdataBir", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("padBir", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("sb", true, $.hasTag(_TagClass.context, 18))
];

/**
 * @summary The Trailing Root Component Types of PadSBIR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PadSBIR: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PadSBIR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PadSBIR: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PadSBIR: $.ASN1Decoder<PadSBIR> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PadSBIR
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PadSBIR (el: _Element): PadSBIR {
    if (!_cached_decoder_for_PadSBIR) { _cached_decoder_for_PadSBIR = $._decode_implicit<PadSBIR>(() => function (el: _Element): PadSBIR {
    let birSelfId!: RegistryID;
    let cbeffVersion!: Version;
    let patronHeaderVersion!: Version;
    let numChildren!: INTEGER;
    let birInfo!: PadSBIR_birInfo;
    let sbInfo: OPTIONAL<PadSBIR_sbInfo>;
    let biometricdataBir!: PadSBIR_biometricdataBir_childBir[];
    let padBir!: PadSBIR_padBir_childBir[];
    let sb: OPTIONAL<SBType>;
    const callbacks: $.DecodingMap = {
        "birSelfId": (_el: _Element): void => { birSelfId = $._decode_implicit<RegistryID>(() => _decode_RegistryID)(_el); },
        "cbeffVersion": (_el: _Element): void => { cbeffVersion = $._decode_implicit<Version>(() => _decode_Version)(_el); },
        "patronHeaderVersion": (_el: _Element): void => { patronHeaderVersion = $._decode_implicit<Version>(() => _decode_Version)(_el); },
        "numChildren": (_el: _Element): void => { numChildren = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "birInfo": (_el: _Element): void => { birInfo = $._decode_implicit<PadSBIR_birInfo>(() => _decode_PadSBIR_birInfo)(_el); },
        "sbInfo": (_el: _Element): void => { sbInfo = $._decode_implicit<PadSBIR_sbInfo>(() => _decode_PadSBIR_sbInfo)(_el); },
        "biometricdataBir": (_el: _Element): void => { biometricdataBir = $._decode_implicit<PadSBIR_biometricdataBir_childBir[]>(() => $._decodeSequenceOf<PadSBIR_biometricdataBir_childBir>(() => _decode_PadSBIR_biometricdataBir_childBir))(_el); },
        "padBir": (_el: _Element): void => { padBir = $._decode_implicit<PadSBIR_padBir_childBir[]>(() => $._decodeSequenceOf<PadSBIR_padBir_childBir>(() => _decode_PadSBIR_padBir_childBir))(_el); },
        "sb": (_el: _Element): void => { sb = $._decode_implicit<SBType>(() => _decode_SBType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PadSBIR,
        _extension_additions_list_spec_for_PadSBIR,
        _root_component_type_list_2_spec_for_PadSBIR,
        undefined,
    );
    return new PadSBIR(
        birSelfId,
        cbeffVersion,
        patronHeaderVersion,
        numChildren,
        birInfo,
        sbInfo,
        biometricdataBir,
        padBir,
        sb
    );
}); }
    return _cached_decoder_for_PadSBIR(el);
}

let _cached_encoder_for_PadSBIR: $.ASN1Encoder<PadSBIR> | null = null;

/**
 * @summary Encodes a(n) PadSBIR into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PadSBIR, encoded as an ASN.1 Element.
 */
export
function _encode_PadSBIR (value: PadSBIR, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PadSBIR) { _cached_encoder_for_PadSBIR = $._encode_implicit(_TagClass.application, 97, () => function (value: PadSBIR, elGetter: $.ASN1Encoder<PadSBIR>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_RegistryID, $.BER)(value.birSelfId, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 28, () => _encode_Version, $.BER)(value.cbeffVersion, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Version, $.BER)(value.patronHeaderVersion, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.numChildren, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_PadSBIR_birInfo, $.BER)(value.birInfo, $.BER));
    if (value.sbInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_PadSBIR_sbInfo, $.BER)(value.sbInfo, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<PadSBIR_biometricdataBir_childBir>(() => _encode_PadSBIR_biometricdataBir_childBir, $.BER), $.BER)(value.biometricdataBir, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeSequenceOf<PadSBIR_padBir_childBir>(() => _encode_PadSBIR_padBir_childBir, $.BER), $.BER)(value.padBir, $.BER));
    if (value.sb !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_SBType, $.BER)(value.sb, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}, $.BER); }
    return _cached_encoder_for_PadSBIR(value, elGetter);
}


/* eslint-enable */
